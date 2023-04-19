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

export const DEFAULT_PROJECT_COLOR = '#aabbcc';

export const DEFAULT_CREATE_PROJECT_FORM: CreateProjectRequestBody = {
  projectName: '',
  projectDescription: '',
  uriPattern: '',
  category: '',
  language: '',
  projectColor: DEFAULT_PROJECT_COLOR,
};

export const createProjectFormState = atom<CreateProjectForm>({
  key: 'createProjectForm',
  default: DEFAULT_CREATE_PROJECT_FORM,
});
