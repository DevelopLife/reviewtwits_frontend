import { useMutation } from '@tanstack/react-query';

import { projectsAPI } from 'api/projects';
import { ProjectCreateForm } from 'components/Project/Create/ProjectCreateForm';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { useCreateProject } from 'hooks/useCreateProject';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';

const ProjectCreatePage = () => {
  const { createProjectForm } = useCreateProject();

  const { mutate } = useMutation(() => projectsAPI.create(createProjectForm), {
    onSuccess: () => alert('성공'),
    onError: () => alert('실패'),
  });
  return (
    <ProjectCreateLayout
      title={PROJECT_TITLE}
      buttonText={BUTTON_TEXTS.CREATE}
      onClickButton={mutate}
    >
      <ProjectCreateForm />
    </ProjectCreateLayout>
  );
};

export default ProjectCreatePage;
