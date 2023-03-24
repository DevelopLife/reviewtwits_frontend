import { PricePlan } from 'api/projects';
import { useCreateProject } from 'hooks/useCreateProject';
import { useState } from 'react';

export const useSelectProjectPlan = () => {
  const [isSelectedCardIndex, setIsSelectedCardIndex] = useState<null | number>(
    null
  );
  const { changeProjectPlan } = useCreateProject();

  const changeCreateProjectPlan: ChangeCreateProjectPlan = ({
    index,
    plan,
  }) => {
    setIsSelectedCardIndex(index);
    changeProjectPlan(plan);
  };

  return {
    isSelectedCardIndex,
    changeCreateProjectPlan,
  };
};

export type ChangeCreateProjectPlanParams = { index: number; plan: PricePlan };
export type ChangeCreateProjectPlan = ({
  index,
  plan,
}: ChangeCreateProjectPlanParams) => void;
