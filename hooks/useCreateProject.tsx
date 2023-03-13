import { PricePlan } from 'api/projects';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { createProjectFormState } from 'states/createProjectForm';

export const useCreateProject = () => {
  const [createProjectForm, setCreateProjectForm] = useRecoilState(
    createProjectFormState
  );

  const changeCreateProjectFormByInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateProjectForm((pre) => ({ ...pre, ...{ [name]: value } }));
  };

  const changeCreateProjectFormBySelect = (name: string, value: string) => {
    if (createProjectForm[name] === value) return;
    setCreateProjectForm((pre) => ({ ...pre, ...{ [name]: value } }));
  };

  const changeProjectPlan = (plan: PricePlan) => {
    const upperCasePlan = plan.toUpperCase() as Uppercase<PricePlan>;

    setCreateProjectForm((pre) => ({
      ...pre,
      ...{ pricePlan: `${upperCasePlan}_PLAN` },
    }));
  };

  return {
    createProjectForm,
    changeCreateProjectFormByInput,
    changeCreateProjectFormBySelect,
    changeProjectPlan,
  };
};
