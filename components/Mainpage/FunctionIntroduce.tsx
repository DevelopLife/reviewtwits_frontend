import { useState } from 'react';
import styled from '@emotion/styled';

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

const S = {
  Container: styled.div`
    width: ${({ theme }) => theme.devices.desktop}px;
    height: ${1011 + 69}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #4a4a4a;
  `,

  Title: styled.h4`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 53px;
    color: #ffffff;

    margin-top: 81px;
    margin-bottom: 50px;
  `,

  Lists: styled.ul`
    width: 1214px;
    height: 78px;

    display: flex;
    padding: 0;
    gap: 50px;
  `,

  Button: styled.button<{ selected: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 26px 70px;
    gap: 10px;

    background: #ffffff;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.08);
    border-radius: 20px;

    background-color: ${(props) => props.selected && '#FC4A55'};

    flex: none;
    order: 2;
    flex-grow: 0;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;

    color: #181818;
  `,

  Desc: styled.p`
    width: 523px;
    height: 72px;

    margin-top: 84px;
    margin-bottom: 27px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;

    color: #ffffff;
  `,

  FunctionImage: styled.div`
    width: 1235px;
    height: 538px;
    margin-bottom: 97px;

    background: #d9d9d9;
  `,
};
