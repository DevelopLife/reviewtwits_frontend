import {
  ComprehensiveData,
  OrderData,
  Graph,
} from 'components/Dashboard/@index';
import DashboardPageLayout from 'components/Dashboard/Common/DashboardPageLayout';
import Margin from 'components/Dashboard/Common/Margin';
import React from 'react';

const DashboardPage = () => {
  return (
    <DashboardPageLayout>
      <Margin marginTop={60} marginBottom={51}>
        <ComprehensiveData />
      </Margin>
      <Graph />

      <Margin marginTop={70.58} marginBottom={60}>
        <OrderData />
      </Margin>
    </DashboardPageLayout>
  );
};

export default DashboardPage;
