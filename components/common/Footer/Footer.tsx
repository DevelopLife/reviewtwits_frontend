import { APP_NAME } from 'constants/index';
import { RefObject } from 'react';
import { scrollIntoTarget } from 'utils/scrollIntoTarget';

import * as S from './Footer.styles';

interface FooterProps {
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
      <S.BoxContainer>
        <S.Box>box</S.Box>
        <S.Box>box</S.Box>
        <S.Box>box</S.Box>
        <S.Box>box</S.Box>
      </S.BoxContainer>
      <S.RightInfo>©2023 ReviewTwits Inc | All Rights Reserved</S.RightInfo>
    </S.Container>
  );
};

export default Footer;
