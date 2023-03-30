import SnsSidebar from 'components/sns/common/SocialSidebar';
import SocialContentLayout from 'components/sns/common/SocialContentLayout';
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
