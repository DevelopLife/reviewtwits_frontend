import { api, mockApi } from 'api/instance';
import { AxiosResponse } from 'axios';

const PROJECTS_URL = 'projects';

export const projectsAPI = {
  get: (): ResponseType<GetProjectsResponseData[]> => mockApi.get(PROJECTS_URL),
  create: (requestBody: CreateProjectRequestBody) =>
    mockApi.post(PROJECTS_URL, requestBody),
  patch: (projectId: string, requestBody: CreateProjectRequestBody) =>
    mockApi.patch(`${PROJECTS_URL}/${projectId}`, requestBody),
};

type ResponseType<T> = Promise<AxiosResponse<T>>;

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