import {
  ComprehensiveData,
  OrderData,
  Graph,
} from 'components/Dashboard/@index';
import DashboardPageLayout from 'components/Dashboard/common/DashboardPageLayout';
import Margin from 'components/Dashboard/common/Margin';
// import VisitorStatistics from 'components/Statistics/VisitorStatistics';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const router = useRouter();
  const { projectId } = router.query as { projectId: string };

  return (
    <DashboardPageLayout>
      <Margin marginTop={60} marginBottom={51}>
        <ComprehensiveData projectId={projectId} />
      </Margin>
      <Graph projectId={projectId} />
      <Margin marginTop={70.58} marginBottom={60}>
        <OrderData projectId={projectId} />
      </Margin>
    </DashboardPageLayout>
  );
};

export default DashboardPage;
