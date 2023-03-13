import { CreateProjectRequestBody } from 'api/projects';
import { atom } from 'recoil';

export const DEFAULT_CREATE_PROJECT_FORM: CreateProjectRequestBody = {
  // siteAdmin: '',
  projectName: '',
  projectDescription: '',
  uriPattern: '',
  category: '',
  language: '',
  projectColor: 'red',
  pricePlan: '',
};

export const createProjectFormState = atom<CreateProjectRequestBody>({
  key: 'createProjectForm',
  default: DEFAULT_CREATE_PROJECT_FORM,
});
