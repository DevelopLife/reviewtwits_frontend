import { CreateProjectCard } from 'components/ProjectManagement/CreateProjectCard';

export default {
  title: 'CreateProjectCard',
  component: CreateProjectCard,
};

export const Primary = () => (
  <CreateProjectCard
    styles={{
      color: 'gray_9',
      backgroundColor: 'gray_2',
    }}
  />
);
export const Hover = () => (
  <CreateProjectCard
    styles={{
      color: 'gray_9',
      backgroundColor: 'gray_2',
    }}
  />
);
