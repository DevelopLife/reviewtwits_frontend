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
    setCreateProjectForm((pre) => ({ ...pre, ...{ [name]: value } }));
  };

  return {
    createProjectForm,
    changeCreateProjectFormByInput,
    changeCreateProjectFormBySelect,
  };
};
