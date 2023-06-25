import { useQuery } from '@tanstack/react-query';
import { projectsAPI } from 'api/projects';

export const useGetProjectManagement = () => {
  const { data } = useQuery(['projectManagement'], projectsAPI.get, {
    retry: false,
  });

  return data;
};
