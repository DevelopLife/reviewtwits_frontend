import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { ProjectPlans } from 'components/Project/Plans/ProjectPlans';
import { BUTTON_TEXTS, PROJECT_TITLE } from 'constants/project';

const ProjectPlansPage = () => {
  return (
    <ProjectCreateLayout title={PROJECT_TITLE} buttonText={BUTTON_TEXTS.PLANS}>
      <ProjectPlans />
    </ProjectCreateLayout>
  );
};

export default ProjectPlansPage;
