import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const DetailImage = () => {
  return (
    <S.Container>
      <S.LeftButton>left</S.LeftButton>
      <div>
        <Image src="" alt="" width={422} height={422} />
        <S.ImagePaginators>
          <S.ImagePaginator target={true} />
          <S.ImagePaginator />
          <S.ImagePaginator />
        </S.ImagePaginators>
      </div>
      <S.RightButton>right</S.RightButton>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;

    width: 654px;

    margin-top: 109px;
    margin-bottom: 93px;
  `,

  LeftButton: styled.button``,
  RightButton: styled.button``,

  ImagePaginators: styled.ul`
    display: flex;
    flex-direction: row;
    gap: 8px;

    align-items: center;
    justify-content: center;

    max-width: 654px;
    margin-top: 21px;
    height: 12px;
  `,
  ImagePaginator: styled.li<{ target?: boolean }>`
    width: 12px;
    height: 12px;
    background-color: ${({ target, theme }) =>
      target ? theme.colors.secondary : '#d9d9d9'};
    border-radius: 50%;
  `,
};

export default DetailImage;
