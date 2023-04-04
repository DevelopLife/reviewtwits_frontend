import styled from '@emotion/styled';
import { WrapProps } from 'typings/wrapperProps';

const Hover = ({ children }: WrapProps) => {
  return <S.HoverTag>{children}</S.HoverTag>;
};

const S = {
  HoverTag: styled.div`
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `,
};

export default Hover;
