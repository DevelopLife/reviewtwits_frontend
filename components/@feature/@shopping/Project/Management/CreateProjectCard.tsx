import {
  ProjectCardCommon,
  ProjectCardCommonProps,
} from 'components/@feature/@shopping/Project/Management/ProjectCardCommon';
import PluseIconSVG from 'public/icons/plus.svg';

export const CreateProjectCard = (props: ProjectCardCommonProps) => {
  return <CreateProjectCardView {...props} />;
};

export const CreateProjectCardView = ({
  styles,
  ...rest
}: ProjectCardCommonProps) => {
  return (
    <ProjectCardCommon styles={styles} {...rest}>
      <PluseIconSVG />
    </ProjectCardCommon>
  );
};
