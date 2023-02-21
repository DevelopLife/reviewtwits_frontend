import { APP_NAME } from '@/constants';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Container>
      <S.Title>{APP_NAME}</S.Title>
      <S.HeaderRight>
        <S.Navbar>
          <S.NavLink>서비스 소개</S.NavLink>
          <S.NavLink>메뉴얼</S.NavLink>
          <S.NavLink>가격</S.NavLink>
          <S.NavLink>Docs</S.NavLink>
        </S.Navbar>
        <S.Profile>userImg</S.Profile>
      </S.HeaderRight>
    </S.Container>
  );
};

export default Header;
