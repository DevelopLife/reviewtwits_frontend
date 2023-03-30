import * as S from './SnsLayout.styles';

interface SnsMenusProps extends WrapProps {}

const SnsMenus = ({ children }: SnsMenusProps) => {
  return <S.SnsMenuList>{children}</S.SnsMenuList>;
};

export default SnsMenus;
