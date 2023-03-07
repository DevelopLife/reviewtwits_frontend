import styled from '@emotion/styled';
import { PlanCard } from 'components/common/PlanCard/PlanCard';

export const ProjectPlans = () => {
  return (
    <S.ProjectPlansContainer>
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </S.ProjectPlansContainer>
  );
};

const S = {
  ProjectPlansContainer: styled.section`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
};
