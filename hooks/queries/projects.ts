import { useMutation, useQuery } from '@tanstack/react-query';
import { UppercasePricePlan, projectsAPI } from 'api/projects';
import { CreateProjectForm } from 'states/createProjectForm';

export const useGetProjectManagement = () => {
  const { data } = useQuery(['projectManagement'], projectsAPI.get, {
    retry: false,
  });

  return data;
};

export const usePostProject = (
  createProjectForm: CreateProjectForm,
  projectPlan: UppercasePricePlan | '',
  afterSuccess: (projectName: string) => void
) => {
  const mutate = useMutation(
    () => projectsAPI.create({ ...createProjectForm, pricePlan: projectPlan }),
    {
      onSuccess: (response) => afterSuccess(response.projectName),
    }
  );
  return mutate;
};
