import styled from '@emotion/styled';

import { PlanCard } from 'components/Project/Plans/PlanCard';
import { PLAN_DATAS } from 'constants/planDatas';
import {
  ChangeCreateProjectPlan,
  useSelectProjectPlan,
} from 'hooks/useSelectProjectPlan';

export const ProjectPlans = () => {
  const { isSelectedCardIndex, changeCreateProjectPlan } =
    useSelectProjectPlan();

  return (
    <ProjectPlansView
      isSelectedCardIndex={isSelectedCardIndex}
      selectPlan={changeCreateProjectPlan}
    />
  );
};

interface ProjectPlansViewProps {
  isSelectedCardIndex: number | null;
  selectPlan: ChangeCreateProjectPlan;
}

export const ProjectPlansView = ({
  isSelectedCardIndex,
  selectPlan,
}: ProjectPlansViewProps) => {
  return (
    <S.ProjectPlansContainer>
      {Object.values(PLAN_DATAS).map(({ title, price, options }, index) => (
        <PlanCard
          isSelected={isSelectedCardIndex === index}
          key={title}
          title={`${title} Plan`}
          price={price}
          options={options}
          onClick={() => selectPlan({ index, plan: title })}
        />
      ))}
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
