import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';

const SocialMenus = ({ children }: WrapProps) => {
  return <S.Menus>{children}</S.Menus>;
};

export default SocialMenus;

const S = {
  Menus: styled.ul``,
};
