import styled from '@emotion/styled';
import React from 'react';

interface ContantsProps {
  content: string;
}

const Contants = ({ content }: ContantsProps) => {
  return (
    <S.Container>
      <S.TextBox>{content}</S.TextBox>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-top: 16px;
    padding-bottom: 16px;

    width: 500px;
    height: 111px;
  `,

  TextBox: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;

    height: 81px;
    width: 500px;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `,
};

export default Contants;
