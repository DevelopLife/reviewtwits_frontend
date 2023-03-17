import type { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { projectsAPI } from 'api/projects';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { ProjectPlans } from 'components/Project/Plans/ProjectPlans';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';
import { useCreateProject } from 'hooks/useCreateProject';
import { useRouter } from 'next/router';

const ProjectPlansPage = () => {
  const router = useRouter();
  const navigateLogin = () => router.push('../login');
  const { createProjectForm } = useCreateProject();
  const { mutate } = useMutation(() => projectsAPI.create(createProjectForm), {
    onSuccess: () => alert('성공'),
    onError: (err: AxiosError) => {
      const statusCode = err?.response?.status;

      if (statusCode === 403) {
        alert(`${statusCode} 로그인 페이지로 이동합니다.`);
        navigateLogin();
      }
    },
  });

  return (
    <ProjectCreateLayout
      title={PROJECT_TITLE}
      buttonText={BUTTON_TEXTS.PLANS}
      onClickButton={mutate}
    >
      <ProjectPlans />
    </ProjectCreateLayout>
  );
};

export default ProjectPlansPage;
