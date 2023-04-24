import { APP_NAME } from 'constants/index';
import Image from 'next/image';
import { useState } from 'react';

import * as S from './Header.styles';
import UserMenu from './UserMenu';
import useUserProfile from 'hooks/useUserProfile';
import { formattedImageUrl } from 'utils/format';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isLogin, profileImageUrl } = useUserProfile();

  const toggleMenuOpen = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <S.Container>
      <S.Header>
        <S.Title>{APP_NAME}</S.Title>
        <S.Navbar>
          <S.NavLink>서비스 소개</S.NavLink>
          <S.NavLink>메뉴얼</S.NavLink>
          <S.NavLink>가격</S.NavLink>
          <S.NavLink>Docs</S.NavLink>
        </S.Navbar>
        <S.RightBox>
          {isLogin ? (
            <>
              <S.Profile onClick={toggleMenuOpen}>
                <Image
                  src={
                    profileImageUrl ? formattedImageUrl(profileImageUrl) : ''
                  }
                  width={40}
                  height={40}
                  alt="userImg"
                />
              </S.Profile>
              {isMenuOpen && <UserMenu closeMenu={closeMenu} />}
            </>
          ) : (
            <S.AuthButtons>
              <S.Login>로그인</S.Login>
              <S.Signup>회원가입</S.Signup>
            </S.AuthButtons>
          )}
        </S.RightBox>
      </S.Header>
    </S.Container>
  );
};

export default Header;
