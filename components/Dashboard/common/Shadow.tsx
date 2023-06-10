import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';

const Shadow = ({ children }: WrapProps) => {
  const S = {
    Background: styled.div`
      background: #ffffff;

      box-shadow: 4px 4px 23px rgba(0, 0, 0, 0.14);
      border-radius: 15px;
    `,
  };

  return <S.Background>{children}</S.Background>;
};

export default Shadow;
