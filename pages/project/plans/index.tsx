import { useMutation } from '@tanstack/react-query';

import { projectsAPI } from 'api/projects';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { ProjectPlans } from 'components/Project/Plans/ProjectPlans';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';
import { useCreateProject } from 'hooks/useCreateProject';

const ProjectPlansPage = () => {
  const { createProjectForm } = useCreateProject();
  const { mutate } = useMutation(
    () => {
      return projectsAPI.create(createProjectForm);
    },
    {
      onSuccess: () => alert('성공'),
      onError: () => alert('실패'),
    }
  );

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
