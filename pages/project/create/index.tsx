import { useRouter } from 'next/router';

import { ProjectCreateForm } from 'components/Project/Create/ProjectCreateForm';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';

const ProjectCreatePage = () => {
  const router = useRouter();
  const navigate = () => router.push('./plans');
  return (
    <ProjectCreateLayout
      title={PROJECT_TITLE}
      buttonText={BUTTON_TEXTS.CREATE}
      onClickButton={navigate}
    >
      <ProjectCreateForm />
    </ProjectCreateLayout>
  );
};

export default ProjectCreatePage;
