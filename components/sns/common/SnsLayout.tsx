import SnsSidebar from 'components/sns/common/SnsSidebar';
import SocialContentLayout from 'components/sns/common/SocialContentLayout';
import { WrapProps } from 'typings/wrapperProps';
import * as S from './SnsLayout.styles';

interface SnsLayoutProps extends WrapProps {}

const SnsLayout = ({ children }: SnsLayoutProps) => {
  return (
    <S.SnsLayout>
      <SnsSidebar />
      <SocialContentLayout>{children}</SocialContentLayout>
    </S.SnsLayout>
  );
};

export default SnsLayout;
