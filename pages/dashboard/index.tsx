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
  const { projectName } = router.query as { projectName: string };

  return (
    <DashboardPageLayout>
      <Margin marginTop={60} marginBottom={51}>
        <ComprehensiveDataSection projectName={projectName} />
      </Margin>
      <Margin marginTop={60} marginBottom={60}>
        <VisitSection projectName={projectName} />
      </Margin>
      <Margin marginTop={70.58} marginBottom={60}>
        <ProductStatisticsSection projectName={projectName} />
      </Margin>
    </DashboardPageLayout>
  );
};

export default DashboardPage;
