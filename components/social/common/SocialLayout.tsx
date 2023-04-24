import SnsSidebar from 'components/social/common/SocialSidebar';
import SocialContentLayout from 'components/social/common/SocialContentLayout';
import type { WrapProps } from 'typings/wrapperProps';
import * as S from './SocialLayout.styles';

const SnsLayout = ({ children }: WrapProps) => {
  return (
    <S.SnsLayout>
      <SnsSidebar />
      <SocialContentLayout>{children}</SocialContentLayout>
    </S.SnsLayout>
  );
};

export default SnsLayout;