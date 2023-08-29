import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import useStatistics from 'hooks/queries/statistics';
import Shadow from 'components/Dashboard/Common/Shadow';
import ChartIcon from 'public/icons/chart.svg';
import Button from '../Common/Button';

interface VisitCountProps {
  projectName: string;
}

const VisitCount = ({ projectName }: VisitCountProps) => {
  const router = useRouter();
  const { query } = router;

  const { useVisitGraphInfosQuery } = useStatistics(projectName);

  const { data } = useVisitGraphInfosQuery({
    range: '1mo',
    interval: '1d',
  });
  const visitCountData = data?.data;

  return (
    <S.Container>
      <Shadow>
        <S.Flex>
          <S.Datas>
            <S.Data>
              <S.DataTitle>오늘 방문수</S.DataTitle>
              <S.DataDesc>{visitCountData?.todayVisit || 0}</S.DataDesc>
            </S.Data>
            <S.Data>
              <S.DataTitle>어제 방문수</S.DataTitle>
              <S.DataDesc>{visitCountData?.yesterdayVisit || 0}</S.DataDesc>
            </S.Data>
            <S.Data>
              <S.DataTitle>누적 방문수</S.DataTitle>
              <S.DataDesc>{visitCountData?.totalVisit || 0}</S.DataDesc>
            </S.Data>
          </S.Datas>
          <Link
            href={{
              pathname: '/project/statistics',
              query,
            }}
          >
            <Button>
              <S.RedirectButton>
                방문 통계
                <ChartIcon />
              </S.RedirectButton>
            </Button>
          </Link>
        </S.Flex>
      </Shadow>
    </S.Container>
  );
};

export default VisitCount;

const S = {
  Container: styled.div`
    width: 1200px;
    margin: auto;
  `,
  Flex: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px;
  `,

  Datas: styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

    width: 350px;
  `,

  Data: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  DataTitle: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* Black */

    color: #181818;
  `,

  DataDesc: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;

    /* Secondary */

    color: #181818;
  `,

  RedirectButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
