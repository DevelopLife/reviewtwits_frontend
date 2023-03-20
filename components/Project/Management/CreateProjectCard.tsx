import Image from 'next/image';

import {
  ProjectCardCommon,
  ProjectCardCommonProps,
} from 'components/Project/Management/ProjectCardCommon';
import PluseIconSVG from 'public/images/plus_icon.svg';

export const CreateProjectCard = (props: ProjectCardCommonProps) => {
  return <CreateProjectCardView {...props} />;
};

export const CreateProjectCardView = ({
  styles,
  ...rest
}: ProjectCardCommonProps) => {
  return (
    <ProjectCardCommon styles={styles} {...rest}>
      <Image src={PluseIconSVG} alt={'plus_icon'} />
    </ProjectCardCommon>
  );
};
