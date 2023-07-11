import {
  LeadTimeInfoSection,
  ViewsStatistics,
  VisitorStatistics,
} from 'components/Statistics/@index';
import Margin from 'components/Statistics/common/Margin';
import StatisticsPageLayout from 'components/Statistics/common/StatisticsPageLayout';
import { useRouter } from 'next/router';

const ProjectStatisticsPage = () => {
  const router = useRouter();
  const { projectName } = router.query as { projectName: string };

  return (
    <StatisticsPageLayout>
      <Margin marginTop={60}>
        <VisitorStatistics projectName={projectName} />
      </Margin>
      <Margin marginTop={40}>
        <ViewsStatistics projectName={projectName} />
      </Margin>
      <Margin marginTop={48}>
        <LeadTimeInfoSection projectName={projectName} />
      </Margin>
      <Margin marginTop={32}>{/* <ProductStatistics /> */}</Margin>
      <Margin marginBottom={60} />
    </StatisticsPageLayout>
  );
};

export default ProjectStatisticsPage;
