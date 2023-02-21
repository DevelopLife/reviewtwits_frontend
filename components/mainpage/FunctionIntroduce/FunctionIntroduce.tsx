import React from 'react';
import * as S from './FunctionIntroduce.styles';

const FunctionIntroduce = () => {
  return (
    <S.Container>
      <S.Title>주요기능</S.Title>
      <S.Lists>
        <S.List>서비스 등록</S.List>
        <S.List>리뷰 시스템 등록</S.List>
        <S.List>대쉬보드 리뷰관리</S.List>
        <S.List>커스텀 리뷰</S.List>
      </S.Lists>
      <S.Desc>리뷰 시스템으로 디지털 판매 혁신을 지원합니다</S.Desc>
      <S.FunctionImage>Img</S.FunctionImage>
    </S.Container>
  );
};

export default FunctionIntroduce;
