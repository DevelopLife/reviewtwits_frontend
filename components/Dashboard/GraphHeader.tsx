import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useStatistics from 'hooks/queries/statistics';
import Button from './common/Button';
import * as S from './GraphHeader.styles';

interface PageDataProps {
  projectId: string;
}

const PageData = ({ projectId }: PageDataProps) => {
  const router = useRouter();
  const { query } = router;

  const { useVisitGraphInfosQuery } = useStatistics({
    projectId,
  });

  const { data } = useVisitGraphInfosQuery();
  const visitCountData = data?.data;

  return (
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
  );
};

export default PageData;
