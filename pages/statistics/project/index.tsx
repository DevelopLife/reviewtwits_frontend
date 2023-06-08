import { useRouter } from 'next/router';

import {
  VisitorStatistics,
  ViewsStatistics,
} from 'components/Statistics/@index';
import Margin from 'components/Statistics/common/Margin';
import StatisticsPageLayout from 'components/Statistics/common/StatisticsPageLayout';

import useStatistics from 'hooks/queries/statistics';

const ProjectStatisticsPage = () => {
  const router = useRouter();
  const { projectName } = router.query as { projectName: string };

  const {
    recentVisitCountsQuery,
    dailyVisitGraphInfosQuery,
    visitGraphInfosQuery,
  } = useStatistics({
    projectId: projectName || '25020',
    // range,
    // interval,
  });

  const { data: dailyVisitGraphInfos } = dailyVisitGraphInfosQuery;
  const { data: visitGraphInfos } = visitGraphInfosQuery;

  return (
    <StatisticsPageLayout>
      <Margin marginTop={60}>
        <VisitorStatistics getRecentVisitCounts={recentVisitCountsQuery} />
      </Margin>
      <Margin marginTop={40}>
        <ViewsStatistics />
      </Margin>
      <Margin marginTop={48}>
        {/* <LeadTimeRate
          chartDatas={visitGraphInfos?.data}
          dataKey={'previousVisit'}
        /> */}
      </Margin>

      <Margin marginTop={32}>{/* <ProductStatistics /> */}</Margin>
      <Margin marginBottom={60} />
    </StatisticsPageLayout>
  );
};

export default ProjectStatisticsPage;
