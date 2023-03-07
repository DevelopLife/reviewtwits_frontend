import { ProjectCreateLayout } from 'components/Project/Create/ProjectCreateLayout';
import { ProjectPlans } from 'components/Project/Plans/ProjectPlans';

const ProjectPlansPage = () => {
  return (
    <ProjectCreateLayout title="새로운 프로젝트 생성">
      <ProjectPlans />
    </ProjectCreateLayout>
  );
};

export default ProjectPlansPage;
