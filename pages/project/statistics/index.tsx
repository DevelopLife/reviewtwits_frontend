import {
  ViewsStatistics,
  VisitorStatistics,
} from 'components/Statistics/@index';
import Margin from 'components/Statistics/common/Margin';
import StatisticsPageLayout from 'components/Statistics/common/StatisticsPageLayout';
import { useRouter } from 'next/router';

const ProjectStatisticsPage = () => {
  const router = useRouter();
  const { projectId } = router.query as { projectId: string };

  return (
    <StatisticsPageLayout>
      <Margin marginTop={60}>
        <VisitorStatistics projectId={projectId} />
      </Margin>
      <Margin marginTop={40}>
        <ViewsStatistics projectId={projectId} />
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
