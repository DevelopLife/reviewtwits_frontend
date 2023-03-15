import React, { useState } from 'react';
import * as S from './FunctionIntroduce.styles';

export type SelectedButton =
  | '서비스 등록'
  | '리뷰 시스템 등록'
  | '대쉬보드 리뷰관리'
  | '커스텀 리뷰';

const FunctionIntroduce = () => {
  const [selectedButton, setSelectedButton] =
    useState<SelectedButton>('서비스 등록');

  const onButtonClick = (target: SelectedButton) => {
    setSelectedButton(target);
  };
  return (
    <S.Container>
      <S.Title>주요기능</S.Title>

      <S.Lists>
        <S.Button
          onClick={() => onButtonClick('서비스 등록')}
          selected={selectedButton === '서비스 등록'}
        >
          서비스 등록
        </S.Button>
        <S.Button
          onClick={() => onButtonClick('리뷰 시스템 등록')}
          selected={selectedButton === '리뷰 시스템 등록'}
        >
          리뷰 시스템 등록
        </S.Button>
        <S.Button
          onClick={() => onButtonClick('대쉬보드 리뷰관리')}
          selected={selectedButton === '대쉬보드 리뷰관리'}
        >
          대쉬보드 리뷰관리
        </S.Button>
        <S.Button
          onClick={() => onButtonClick('커스텀 리뷰')}
          selected={selectedButton === '커스텀 리뷰'}
        >
          커스텀 리뷰
        </S.Button>
      </S.Lists>
      <S.Desc>리뷰 시스템으로 디지털 판매 혁신을 지원합니다</S.Desc>
      <S.FunctionImage>Img</S.FunctionImage>
    </S.Container>
  );
};

export default FunctionIntroduce;
