import {
  VisitorStatistics,
  ViewsStatistics,
  LeadTimeRate,
  ProductStatistics,
} from 'components/@feature/@shopping/Statistics/@index';
import Margin from 'components/@feature/@shopping/Statistics/Common/Margin';
import StatisticsPageLayout from 'components/@feature/@shopping/Statistics/Common/StatisticsPageLayout';
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
