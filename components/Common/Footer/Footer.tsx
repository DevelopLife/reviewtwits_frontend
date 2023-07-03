import type { RefObject } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { APP_NAME } from 'constants/index';
import { scrollIntoTarget } from 'utils/scrollIntoTarget';

import GithubIcon from 'public/icons/github.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import TwitterIcon from 'public/icons/twitter.svg';
import YoutubeIcon from 'public/icons/youtube.svg';

export interface FooterProps {
  mainHomeRef: RefObject<HTMLDivElement>;
  serviceIntroduceRef: RefObject<HTMLDivElement>;
  functoinIntroduceRef: RefObject<HTMLDivElement>;
  effectIntroduceRef: RefObject<HTMLDivElement>;
}

const Footer = ({
  mainHomeRef,
  serviceIntroduceRef,
  functoinIntroduceRef,
  effectIntroduceRef,
}: FooterProps) => {
  return (
    <S.Container>
      <S.Navbar>
        <S.LeftLists>
          <S.List onClick={() => scrollIntoTarget(mainHomeRef)}>Home</S.List>
          <S.List onClick={() => scrollIntoTarget(serviceIntroduceRef)}>
            Service
          </S.List>
        </S.LeftLists>
        <S.AppName>{APP_NAME}</S.AppName>
        <S.RightLists>
          <S.List onClick={() => scrollIntoTarget(functoinIntroduceRef)}>
            Function
          </S.List>
          <S.List onClick={() => scrollIntoTarget(effectIntroduceRef)}>
            Effect
          </S.List>
        </S.RightLists>
      </S.Navbar>
      <S.Line />
      <S.SocialButtonContainer>
        <Link href="https://github.com/DevelopLife" target="_blank">
          <button>
            <GithubIcon />
          </button>
        </Link>
        <Link href="/" target="_blank">
          <button>
            <InstagramIcon />
          </button>
        </Link>
        <Link href="/" target="_blank">
          <button>
            <TwitterIcon />
          </button>
        </Link>
        <Link href="/" target="_blank">
          <button>
            <YoutubeIcon />
          </button>
        </Link>
      </S.SocialButtonContainer>
      <S.RightInfo>©2023 ReviewTwits Inc | All Rights Reserved</S.RightInfo>
    </S.Container>
  );
};

export default Footer;

const S = {
  Container: styled.div`
    width: ${({ theme }) => theme.devices.desktop}px;
    height: 651px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #181818;

    position: relative;
  `,

  Navbar: styled.div`
    display: flex;
    width: 800px;
    justify-content: space-between;

    margin-top: 113px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;

    color: #ffffff;
  `,

  LeftLists: styled.ul`
    display: flex;
    padding: 0;
    width: 200px;
    justify-content: space-between;
  `,

  RightLists: styled.ul`
    display: flex;
    padding: 0;
    width: 200px;
    justify-content: space-between;
  `,

  List: styled.li`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 1;

    color: #ffffff;
  `,

  AppName: styled.h3`
    position: absolute;
    top: 88px;
    left: 50%;
    transform: translateX(-50%);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 61px;

    color: #ffffff;
  `,

  Line: styled.div`
    margin-top: 73px;
    width: 1440px;
    border: 1px solid #ffffff;
  `,

  SocialButtonContainer: styled.ul`
    display: flex;
    width: 401px;
    justify-content: space-between;

    margin-top: 35px;
    margin-bottom: 34px;
  `,

  RightInfo: styled.p`
    width: 629px;
    height: 36px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 36px;
    text-align: center;

    color: #ffffff;
  `,
};
