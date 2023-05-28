export interface ProjectDto {
  id: string;
  name: string;
  description: string;
  review: number;
  category: string;
}

export interface CreateProjectResponse {
  projectId: string;
  projectName: string;
  projectDescription: string;
  projectColor: string;
  reviewCount: string;
  category: string;
}
