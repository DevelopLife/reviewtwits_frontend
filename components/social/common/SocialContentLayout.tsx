import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';

const SocialContentLayout = ({ children }: WrapProps) => {
  return <S.SocialContentLayout>{children}</S.SocialContentLayout>;
};

export default SocialContentLayout;

const S = {
  SocialContentLayout: styled.section`
    display: flex;
    justify-content: center;

    height: 100vh;

    padding: 60px 20px;
    margin-left: ${({ theme }) => theme.width.socialSidebar.desktop};

    overflow-y: scroll;
  `,
};
