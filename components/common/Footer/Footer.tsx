import { RefObject } from 'react';
import Image from 'next/image';

import { APP_NAME } from 'constants/index';
import { scrollIntoTarget } from 'utils/scrollIntoTarget';

import GithubIcon from 'public/icons/github.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import TwitterIcon from 'public/icons/twitter.svg';
import YoutubeIcon from 'public/icons/youtube.svg';

import * as S from './Footer.styles';
import Link from 'next/link';

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
