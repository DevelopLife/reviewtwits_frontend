import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import { ProjectCreateForm } from 'components/Project/Create/ProjectCreateForm';
import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { ProjectPageLayout } from 'components/Project/common/ProjectPageLayout';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';
import { useCreateProject } from 'hooks/useCreateProject';

import { CreateProjectForm } from 'states/createProjectForm';

const ProjectModifyPage = () => {
  const { isDisabled } = useCreateProject();

  const router = useRouter();
  const { projectId: referenceProjectId } = router.query as {
    projectId: string;
  };

  const navigate = () => router.push('./plans');
  const onClickButton = () => {
    if (isDisabled) return alert('모든 정보를 입력해야해요');
    navigate();
  };

  const queryClient = useQueryClient();
  const projectManagementQueryData = queryClient.getQueryData<
    AxiosResponse<CreateProjectForm[]>
  >(['projectManagement'])?.data;

  const referenceProjectData = projectManagementQueryData?.find(
    ({ projectId }) => projectId === referenceProjectId
  );

  return (
    <ProjectPageLayout>
      <ProjectCreateLayout
        title={PROJECT_TITLE}
        buttonText={BUTTON_TEXTS.CREATE}
        onClickButton={onClickButton}
      >
        <ProjectCreateForm referenceProjectData={referenceProjectData} />
      </ProjectCreateLayout>
    </ProjectPageLayout>
  );
};

export default ProjectModifyPage;
