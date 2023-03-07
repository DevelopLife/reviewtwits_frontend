import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';
import { useCreateProject } from 'hooks/useCreateProject';

const ProjectCreatePage = () => {
  const { renderCurrentStep } = useCreateProject();

  return (
    <ProjectCreateLayout title={PROJECT_TITLE} buttonText={BUTTON_TEXTS.CREATE}>
      {renderCurrentStep()}
    </ProjectCreateLayout>
  );
};

export default ProjectCreatePage;
