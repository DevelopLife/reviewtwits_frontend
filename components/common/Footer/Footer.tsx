import { APP_NAME } from '@/constants';

import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.Container>
      <S.Navbar>
        <S.LeftLists>
          <S.List>Home</S.List>
          <S.List>Service</S.List>
        </S.LeftLists>
        <S.AppName>{APP_NAME}</S.AppName>
        <S.RightLists>
          <S.List>Function</S.List>
          <S.List>Effect</S.List>
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
