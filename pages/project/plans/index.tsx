import type { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { projectsAPI } from 'api/projects';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { ProjectPlans } from 'components/Project/Plans/ProjectPlans';
import { ProjectPageLayout } from 'components/Project/common/ProjectPageLayout';
import { useCreateProject } from 'hooks/useCreateProject';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';

const ProjectPlansPage = () => {
  const router = useRouter();
  const navigateLogin = () => router.push('../login');
  const { createProjectForm, projectPlan } = useCreateProject();
  const { mutate } = useMutation(
    () => projectsAPI.create({ ...createProjectForm, pricePlan: projectPlan }),
    {
      onSuccess: () => alert('성공'),
      onError: (err: AxiosError) => {
        const statusCode = err?.response?.status;

        if (statusCode === 403) {
          alert(`${statusCode} 로그인 페이지로 이동합니다.`);
          navigateLogin();
        }
      },
    }
  );

  return (
    <ProjectPageLayout>
      <ProjectCreateLayout
        title={PROJECT_TITLE}
        buttonText={BUTTON_TEXTS.PLANS}
        onClickButton={mutate}
      >
        <ProjectPlans />
      </ProjectCreateLayout>
    </ProjectPageLayout>
  );
};

export default ProjectPlansPage;
