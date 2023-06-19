import type { FC, SVGProps } from 'react';
import styled from '@emotion/styled';

import OnePeopleIcon from 'public/icons/one-people.svg';
import MultiPeopleIcon from 'public/icons/multi-people.svg';
import useStatistics from 'hooks/queries/statistics';
import DataCard from 'components/Dashboard/Card/DataCard';

type ProjectCountingInformations = {
  monthlyVisitCount: number;
  dailyReviewCount: number;
  pendingReviewCount: number;
  registeredProductCount: number;
};

type CountingInformationKey = keyof ProjectCountingInformations;

type CountingInformationValue = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
};

type CountingInformationsTuple = [
  CountingInformationKey,
  CountingInformationValue
];

const COUNTING_INFORMATIONS = {
  monthlyVisitCount: { Icon: MultiPeopleIcon, title: '월간 조회수' },
  dailyReviewCount: { Icon: OnePeopleIcon, title: '일별 리뷰수' },
  pendingReviewCount: { Icon: OnePeopleIcon, title: '대기중인 리뷰' },
  registeredProductCount: { Icon: OnePeopleIcon, title: '등록된 상품수' },
};

interface ComprehensiveDataSectionProps {
  projectName: string;
}

const ComprehensiveDataSection = ({
  projectName,
}: ComprehensiveDataSectionProps) => {
  const { useSimpleProjectInfo } = useStatistics(projectName);
  const { data: simpleProjectData } = useSimpleProjectInfo();

  const countingInformations = Object.entries(
    COUNTING_INFORMATIONS
  ) as Array<CountingInformationsTuple>;

  return (
    <S.Container>
      {simpleProjectData && countingInformations.length
        ? countingInformations.map(([key, { Icon, title }]) => (
            <DataCard
              key={key}
              Icon={Icon}
              title={title}
              data={simpleProjectData[key]}
            />
          ))
        : null}
    </S.Container>
  );
};

export default ComprehensiveDataSection;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 24px;

    width: 1440px;
  `,
};
