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

  const { createProjectForm, projectPlan } = useCreateProject();
  const { mutateAsync } = useMutation(
    () => projectsAPI.create({ ...createProjectForm, pricePlan: projectPlan }),
    {
      onSuccess: (response) =>
        router.replace(`/project/install?projectName=${response.projectName}`),
    }
  );

  return (
    <ProjectPageLayout>
      <ProjectCreateLayout
        title={PROJECT_TITLE}
        buttonText={BUTTON_TEXTS.PLANS}
        onClickButton={mutateAsync}
      >
        <ProjectPlans />
      </ProjectCreateLayout>
    </ProjectPageLayout>
  );
};

export default ProjectPlansPage;
