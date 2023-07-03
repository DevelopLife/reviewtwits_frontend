import { useRouter } from 'next/router';

import { ProjectCreateForm } from 'components/Project/Create/ProjectCreateForm';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';
import { useCreateProject } from 'hooks/useCreateProject';
import { ProjectPageLayout } from 'components/Project/Common/ProjectPageLayout';

const ProjectCreatePage = () => {
  const { isDisabled } = useCreateProject();
  const router = useRouter();
  const navigate = () => router.push('./plans');
  const onClickButton = () => {
    if (isDisabled) return alert('모든 정보를 입력해야해요');
    navigate();
  };

  return (
    <ProjectPageLayout>
      <ProjectCreateLayout
        title={PROJECT_TITLE}
        buttonText={BUTTON_TEXTS.CREATE}
        onClickButton={onClickButton}
      >
        <ProjectCreateForm />
      </ProjectCreateLayout>
    </ProjectPageLayout>
  );
};

export default ProjectCreatePage;
