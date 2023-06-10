import { useRouter } from 'next/router';

import DashboardPageLayout from 'components/Dashboard/common/DashboardPageLayout';
import Margin from 'components/Dashboard/common/Margin';
import {
  ComprehensiveDataSection,
  ProductStatisticsSection,
  VisitSection,
} from 'components/Dashboard/@index';

const DashboardPage = () => {
  const router = useRouter();
  const { projectId } = router.query as { projectId: string };

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
};

export default DashboardPage;
