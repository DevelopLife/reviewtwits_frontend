import type { WrapProps } from 'typings/wrapperProps';
import * as S from './SocialMenus.styles';

const SocialMenus = ({ children }: WrapProps) => {
  return <S.Menus>{children}</S.Menus>;
};

export default SocialMenus;
