import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';
import SnsSidebar from 'components/@feature/@social/Common/SocialSidebar';
import SocialContentLayout from 'components/@feature/@social/Common/SocialContentLayout';

const SocialLayout = ({ children }: WrapProps) => {
  return (
    <S.SocialLayout>
      <SnsSidebar />
      <SocialContentLayout>{children}</SocialContentLayout>
    </S.SocialLayout>
  );
};

export default SocialLayout;

const S = {
  SocialLayout: styled.div``,
};
