import {
  VisitorStatistics,
  ViewsStatistics,
  LeadTimeRate,
} from 'components/Statistics/@index';
import Margin from 'components/Statistics/common/Margin';
import StatisticsPageLayout from 'components/Statistics/common/StatisticsPageLayout';
import SimpleBarChart from 'components/common/Charts/BarChart';
import useVisitChart from 'components/common/Charts/BarChartState';
import useStatistics from 'hooks/queries/statistics';
import { useRouter } from 'next/router';

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
          {dailyVisitGraphInfos?.data?.visitInfo.length ? (
            <SimpleBarChart data={dailyVisitGraphInfos?.data?.visitInfo} />
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
