import Link from 'next/link';
import { APP_NAME } from 'constants/index';
import Image from 'next/image';
import { useState } from 'react';

import * as S from './Header.styles';
import UserMenu from './UserMenu';
import { formattedImageUrl } from 'utils/format';
import useUserProfile from 'hooks/queries/users';
import Button from '../Button';

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
              <Link href="/social/home">
                <S.SNSButton color="secondary">내 SNS</S.SNSButton>
              </Link>
            </>
          ) : (
            <S.AuthButtons>
              <Link href="/sign-in">
                <S.Login>로그인</S.Login>
              </Link>
              <Link href="/sign-up">
                <S.Signup>회원가입</S.Signup>
              </Link>
            </S.AuthButtons>
          )}
        </S.RightBox>
      </S.Header>
    </S.Container>
  );
};

export default Header;
