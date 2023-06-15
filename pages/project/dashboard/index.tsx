import { useRouter } from 'next/router';

// import VisitorChart from 'components/chart/VisitorChart/VisitorChart';
import ComprehensiveDataSection from 'components/Dashboard/ComprehensiveDataSection';
import ProductStatisticsSection from 'components/Dashboard/ProductStatisticsSection';
import VisitSection from 'components/Dashboard/VisitSection';
import DashboardPageLayout from 'components/Dashboard/common/DashboardPageLayout';
import Margin from 'components/Dashboard/common/Margin';

const ProjectDashboardPage = () => {
  const { query } = useRouter();
  const { projectId = '' } = query as { projectId: string };

  return (
    <DashboardPageLayout>
      <Margin marginTop={60} marginBottom={51}>
        <ComprehensiveDataSection projectId={projectId} />
      </Margin>
      <VisitSection projectId={projectId} />
      <Margin marginTop={70.58} marginBottom={60}>
        <ProductStatisticsSection projectId={projectId} />
      </Margin>
    </DashboardPageLayout>
  );

  // return <VisitorChart projectId={projectId} type={'bar'} />;
};

export default ProjectDashboardPage;
