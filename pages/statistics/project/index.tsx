import {
  VisitorStatistics,
  ViewsStatistics,
  LeadTimeRate,
  // ProductStatistics,
} from 'components/Statistics/@index';
import Margin from 'components/Statistics/common/Margin';
import StatisticsPageLayout from 'components/Statistics/common/StatisticsPageLayout';
import SimpleBarChart from 'components/common/Charts/BarChart';
import useVisitChart from 'components/common/Charts/BarChartState';
import useStatistics from 'hooks/queries/statistics';
import React from 'react';

const ProjectStatisticsPage = () => {
  const {
    initialRecentVisitCountsQuery,
    recentVisitCountsQuery,
    dailyVisitGraphInfosQuery,
    visitGraphInfosQuery,
  } = useStatistics({
    projectId: '25020',
    // range,
    // interval,
  });

  const { data: initialRecentVisitCounts } = initialRecentVisitCountsQuery;
  const { data: recentVisitCounts } = recentVisitCountsQuery;
  const { data: dailyVisitGraphInfos } = dailyVisitGraphInfosQuery;
  const { data: visitGraphInfos } = visitGraphInfosQuery;

  const { origin, handleSelectedValueOnClick } = useVisitChart({
    createInitialStateParams: {
      interval: 7,
      elementCount: 20,
    },
  });

  return (
    <StatisticsPageLayout>
      <Margin marginTop={60}>
        <VisitorStatistics {...recentVisitCounts?.data} />
      </Margin>
      <Margin marginTop={40}>
        <ViewsStatistics onClick={handleSelectedValueOnClick}>
          {initialRecentVisitCounts ||
          dailyVisitGraphInfos?.data?.visitInfo.length ? (
            <SimpleBarChart
              data={
                (initialRecentVisitCounts && initialRecentVisitCounts) ||
                dailyVisitGraphInfos?.data?.visitInfo
              }
            />
          ) : null}
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
