import Link from 'next/link';
import { APP_NAME } from 'constants/index';
import Image from 'next/image';
import { useState } from 'react';

import * as S from './Header.styles';
import UserMenu from './UserMenu';
import { formattedProfileImageUrl } from 'utils/format';
import { useUserProfile } from 'hooks/queries/users';
import { PAGE_LIST } from 'constants/routers';

const NAV_MENUS = [
  { href: `${PAGE_LIST.PROJECT_MANAGEMENT}`, text: '프로젝트 생성' },
  { href: `${PAGE_LIST.DASTHBOARD}`, text: '서비스' },
  {
    href: `${PAGE_LIST.SOCIAL_FOLLOWER}`,
    text: '팔로워',
  },
  { href: PAGE_LIST.SOCIAL_PROFILE, text: '프로필' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isLogin, profileImageUrl } = useUserProfile();

  const toggleMenuOpen = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <S.Container>
      <S.Header>
        <S.Title href={PAGE_LIST.HOME}>{APP_NAME}</S.Title>
        <S.Navbar>
          {NAV_MENUS.map(({ href, text }) => (
            <S.NavLink href={href} key={text}>
              {text}
            </S.NavLink>
          ))}
          {/* <S.NavLink>메뉴얼</S.NavLink>
          <S.NavLink>가격</S.NavLink>
          <S.NavLink>Docs</S.NavLink> */}
        </S.Navbar>
        <S.RightBox>
          {isLogin ? (
            <>
              <S.Profile onClick={toggleMenuOpen}>
                <Image
                  src={formattedProfileImageUrl(profileImageUrl)}
                  width={40}
                  height={40}
                  alt="userImg"
                />
              </S.Profile>
              {isMenuOpen && <UserMenu closeMenu={closeMenu} />}
              <Link href={PAGE_LIST.SOCIAL_HOME}>
                <S.SNSButton color="secondary">내 SNS</S.SNSButton>
              </Link>
            </>
          ) : (
            <S.AuthButtons>
              <Link href={PAGE_LIST.SIGN_IN}>
                <S.Login>로그인</S.Login>
              </Link>
              <Link href={PAGE_LIST.SIGN_UP}>
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
