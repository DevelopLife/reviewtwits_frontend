import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import useStatistics from 'hooks/queries/statistics';
import Shadow from 'components/Dashboard/common/Shadow';
import Button from '../common/Button';

interface VisitCountProps {
  projectId: string;
}

const VisitCount = ({ projectId }: VisitCountProps) => {
  const router = useRouter();
  const { query } = router;

  const { useVisitGraphInfosQuery } = useStatistics({
    projectId,
  });

  const { data } = useVisitGraphInfosQuery();
  const visitCountData = data?.data;

  return (
    <Shadow>
      <S.Container>
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
            pathname: '/statistics/project',
            query,
          }}
        >
          <Button>
            방문 통계
            <Image width={30} height={30} src="" alt="mock" />
          </Button>
        </Link>
      </S.Container>
    </Shadow>
  );
};

export default VisitCount;

const S = {
  Container: styled.div`
    width: 1200px;
    height: 129px;

    margin: auto;
    padding-left: 35px;
    padding-right: 35px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: #ffffff;

    box-shadow: 4px 4px 23px rgba(0, 0, 0, 0.14);
    border-radius: 15px;
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
};
