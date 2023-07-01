import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';
import SnsSidebar from 'components/Social/Common/SocialSidebar';
import SocialContentLayout from 'components/Social/Common/SocialContentLayout';

const SnsLayout = ({ children }: WrapProps) => {
  return (
    <S.SnsLayout>
      <SnsSidebar />
      <SocialContentLayout>{children}</SocialContentLayout>
    </S.SnsLayout>
  );
};

export default SnsLayout;

const S = {
  SnsLayout: styled.div``,
  Link: styled.a``,
};
