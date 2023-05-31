import {
  VisitorStatistics,
  ViewsStatistics,
  LeadTimeRate,
  // ProductStatistics,
} from 'components/Statistics/@index';
import Margin from 'components/Statistics/common/Margin';
import StatisticsPageLayout from 'components/Statistics/common/StatisticsPageLayout';
import SimpleBarChart from 'components/common/Charts/BarChart';
import useStatistics from 'hooks/queries/statistics';
import React from 'react';

const ProjectStatisticsPage = () => {
  const {
    recentVisitCountsQuery,
    dailyVisitGraphInfosQuery,
    visitGraphInfosQuery,
  } = useStatistics({
    projectId: '25020',
    // range,
    // interval,
  });

  const { data: recentVisitCounts } = recentVisitCountsQuery;
  const { data: dailyVisitGraphInfos } = dailyVisitGraphInfosQuery;
  const { data: visitGraphInfos } = visitGraphInfosQuery;

  return (
    <StatisticsPageLayout>
      <Margin marginTop={60}>
        <VisitorStatistics {...recentVisitCounts?.data} />
      </Margin>
      <Margin marginTop={40}>
        <ViewsStatistics>
          <SimpleBarChart data={dailyVisitGraphInfos?.data?.visitInfo} />
        </ViewsStatistics>
      </Margin>
      <Margin marginTop={48}>
        <LeadTimeRate
          chartDatas={visitGraphInfos?.data}
          dataKey={'previousVisit'}
        />
      </Margin>
      <Margin marginTop={32}>{/* <ProductStatistics /> */}</Margin>
      <Margin marginBottom={60} />
    </StatisticsPageLayout>
  );
};

export default ProjectStatisticsPage;
