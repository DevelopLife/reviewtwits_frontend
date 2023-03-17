import { CreateProjectRequestBody } from 'api/projects';
import { atom } from 'recoil';

export interface CreateProjectForm {
  [key: string]: unknown;
  projectName: string;
  uriPattern: string;
  projectDescription?: string;
  category: string;
  language: string;
  projectColor: string;
}

export const DEFAULT_CREATE_PROJECT_FORM: CreateProjectRequestBody = {
  // siteAdmin: '',
  projectName: '',
  projectDescription: '',
  uriPattern: '',
  category: '',
  language: '',
  projectColor: 'red',
};

export const createProjectFormState = atom<CreateProjectForm>({
  key: 'createProjectForm',
  default: DEFAULT_CREATE_PROJECT_FORM,
});
