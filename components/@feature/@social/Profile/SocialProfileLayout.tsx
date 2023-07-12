import styled from '@emotion/styled';
import { WrapProps } from 'typings/wrapperProps';

const SocialProfileLayout = ({ children }: WrapProps) => {
  return <S.Layout>{children}</S.Layout>;
};

export default SocialProfileLayout;

const S = {
  Layout: styled.div`
    width: 1050px;
  `,
};
