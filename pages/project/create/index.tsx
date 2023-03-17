import { useRouter } from 'next/router';

import { ProjectCreateForm } from 'components/Project/Create/ProjectCreateForm';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';
import { useCreateProject } from 'hooks/useCreateProject';

const ProjectCreatePage = () => {
  const { isDisabled } = useCreateProject();
  const router = useRouter();
  const navigate = () => router.push('./plans');
  const onClickButton = () => {
    if (isDisabled) return alert('모든 정보를 입력해야해요');
    navigate();
  };

  return (
    <ProjectCreateLayout
      title={PROJECT_TITLE}
      buttonText={BUTTON_TEXTS.CREATE}
      onClickButton={onClickButton}
    >
      <ProjectCreateForm />
    </ProjectCreateLayout>
  );
};

export default ProjectCreatePage;
