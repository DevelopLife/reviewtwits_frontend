import {
  VisitorStatistics,
  ViewsStatistics,
  LeadTimeRate,
  ProductStatistics,
} from 'components/Statistics/@index';
import Margin from 'components/Statistics/common/Margin';
import StatisticsPageLayout from 'components/Statistics/common/StatisticsPageLayout';
import React from 'react';

const ProjectStatisticsPage = () => {
  return (
    <StatisticsPageLayout>
      <Margin marginTop={60}>
        <VisitorStatistics />
      </Margin>
      <Margin marginTop={40}>
        <ViewsStatistics />
      </Margin>
      <Margin marginTop={48}>
        <LeadTimeRate />
      </Margin>
      <Margin marginTop={32}>
        <ProductStatistics />
      </Margin>
      <Margin marginBottom={60} />
    </StatisticsPageLayout>
  );
};

export default ProjectStatisticsPage;
