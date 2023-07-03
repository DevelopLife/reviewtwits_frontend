import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { projectsAPI } from 'api/projects';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { ProjectPlans } from 'components/Project/Plans/ProjectPlans';
import { ProjectPageLayout } from 'components/Project/Common/ProjectPageLayout';
import { useCreateProject } from 'hooks/useCreateProject';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';
import { usePostProject } from 'hooks/queries/projects';

const ProjectPlansPage = () => {
  const router = useRouter();

  const afterSuccess = (projectName: string) => {
    router.replace(`/project/install?projectName=${projectName}`);
  };

  const { createProjectForm, projectPlan } = useCreateProject();

  const { mutateAsync } = usePostProject(
    createProjectForm,
    projectPlan,
    afterSuccess
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
