import { requiredTokenApi } from 'api/instance';
import { AxiosResponse } from 'axios';
import { CreateProjectResponse } from 'typings/project';

const PROJECTS_URL = 'projects';

export const projectsAPI = {
  get: (): ResponseType<GetProjectsResponseData[]> =>
    requiredTokenApi.get(PROJECTS_URL),
  create: async (requestBody: CreateProjectRequestBody) => {
    const response: AxiosResponse<CreateProjectResponse> =
      await requiredTokenApi.post(PROJECTS_URL, requestBody);
    return response.data;
  },
  patch: (projectId: string, requestBody: CreateProjectRequestBody) =>
    requiredTokenApi.patch(`${PROJECTS_URL}/${projectId}`, requestBody),
};

export type ResponseType<T> = Promise<AxiosResponse<T>>;

export type PricePlan = 'Free' | 'Plus' | 'Pro' | 'Business';
export type UppercasePricePlan = `${Uppercase<PricePlan>}_PLAN`;

export interface CreateProjectRequestBody {
  [key: string]: unknown;
  projectName: string;
  uriPattern: string;
  projectDescription?: string;
  category: string;
  language: string;
  projectColor: string;
  pricePlan?: UppercasePricePlan | '';
}

export interface GetProjectsResponseData {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectColor: string;
  reviewCount: number;
  category: string;
}
