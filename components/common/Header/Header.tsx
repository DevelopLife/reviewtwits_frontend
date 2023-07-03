import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styled from '@emotion/styled';

import UserMenu from './UserMenu';
import { formattedProfileImageUrl } from 'utils/format';
import { useUserProfile } from 'hooks/queries/users';
import { PAGE_LIST } from 'constants/routers';
import { APP_NAME } from 'constants/index';

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

const S = {
  Container: styled.div`
    width: ${({ theme }) => theme.devices.desktop}px;

    position: absolute;
    z-index: 1;

    background-color: #ffffff;
  `,

  Header: styled.header`
    width: 1692px;
    height: 69px;

    display: flex;
    margin: auto;

    justify-content: space-between;
    align-items: center;
  `,

  Title: styled(Link)`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;

    color: #000000;
  `,

  Navbar: styled.div`
    display: flex;
    list-style: none;
    width: 25%;
    justify-content: space-between;
  `,

  NavLink: styled(Link)`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    padding-left: 7px;
    padding-right: 7px;

    color: #000000;
  `,

  RightBox: styled.div`
    position: relative;
    display: flex;
    gap: 20px;
  `,

  Profile: styled.div`
    width: 40px;
    height: 40px;

    img {
      border-radius: 50%;
    }

    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,

  AuthButtons: styled.div`
    width: 210px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  `,

  Login: styled.button`
    width: 99px;
    height: 38px;
    border: 1px solid #000000;
    border-radius: 60px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #181818;
  `,

  Signup: styled.button`
    width: 99px;
    height: 38px;
    border-radius: 60px;

    background: #181818;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
  `,

  SNSButton: styled.button`
    width: 120px;
    height: 46px;

    background: ${({ theme }) => theme.colors.secondary};
    color: white;
    font-size: 18px;
    border-radius: 12px;
  `,
};
