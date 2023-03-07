import { ProjectCreateForm } from 'components/Project/Create/ProjectCreateForm';
import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';

export interface ProjectCreateFormData {
  siteAdmin: string;
  projectName: string;
  siteURL: string;
  productionURLPattern: string;
  categories: string;
  language: string;
  projectColor: string;
}

const DEFAULT_CREATE_PROJECT_FORM: ProjectCreateFormData = {
  siteAdmin: '',
  projectName: '',
  siteURL: '',
  productionURLPattern: '',
  categories: '',
  language: '',
  projectColor: '',
};

const createProjectFormState = atom<ProjectCreateFormData>({
  key: 'createProjectForm',
  default: DEFAULT_CREATE_PROJECT_FORM,
});

export const projectCreateSteps = [ProjectCreateForm, () => <div>sdf</div>];
const MAXIMUM_STEP_NUMBER = projectCreateSteps.length - 1;

export const useCreateProject = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const renderCurrentStep = () => {
    const Template = projectCreateSteps[currentPageNumber];

    return <Template />;
  };
  const nextStep = () => {
    if (MAXIMUM_STEP_NUMBER >= currentPageNumber) return;
    setCurrentPageNumber((pre) => pre + 1);
  };

  const [createProjectForm, setCreateProjectForm] = useRecoilState(
    createProjectFormState
  );

  //TODO: change form
  const changeCreateProjectForm = () => {};

  return {
    currentPageNumber,
    nextStep,
    renderCurrentStep,
    createProjectForm,
    setCreateProjectForm,
  };
};
