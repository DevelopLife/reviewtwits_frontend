import { ChangeEvent, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { PricePlan, UppercasePricePlan } from 'api/projects';
import { useBoolean } from 'hooks/useBoolean';
import {
  CreateProjectForm,
  createProjectFormState,
} from 'states/createProjectForm';
import { projectPlanState } from 'states/projectPlan';

export const useCreateProject = (referenceProjectData?: CreateProjectForm) => {
  const [createProjectForm, setCreateProjectForm] = useRecoilState(
    createProjectFormState
  );

  useEffect(() => {
    referenceProjectData &&
      setCreateProjectForm((prev) => ({ ...prev, ...referenceProjectData }));
  }, [referenceProjectData, setCreateProjectForm]);

  const [projectPlan, setProjectPlan] = useRecoilState<UppercasePricePlan | ''>(
    projectPlanState
  );

  const { isOpen: isDisabled, setTrue, setFalse } = useBoolean(true);

  const values = Object.values(createProjectForm);
  const validate = useCallback(() => {
    for (let i = 0; i < values.length; i++) {
      if (!values[i]) return false;
    }
    return true;
  }, [values]);

  useEffect(() => {
    const validation = validate();
    if (!validation) {
      return setTrue();
    }

    setFalse();
  }, [values, validate, setFalse, setTrue]);

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

    setProjectPlan(`${upperCasePlan}_PLAN`);
  };

  const changeProjectColor = (color: string) => {
    if (createProjectForm.projectColor === color) return;
    setCreateProjectForm((pre) => ({
      ...pre,
      ...{ projectColor: color },
    }));
  };

  return {
    createProjectForm,
    projectPlan,
    changeCreateProjectFormByInput,
    changeCreateProjectFormBySelect,
    changeProjectPlan,
    changeProjectColor,
    isDisabled,
  };
};
