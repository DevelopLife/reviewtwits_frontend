import React from 'react';
import Button from './common/Button';
import * as S from './GraphHeader.styles';

const PageData = () => {
  return (
    <S.Container>
      <S.Datas>
        <S.Data>
          <S.DataTitle>오늘 방문수</S.DataTitle>
          <S.DataDesc>98</S.DataDesc>
        </S.Data>
        <S.Data>
          <S.DataTitle>어제 방문수</S.DataTitle>
          <S.DataDesc>407</S.DataDesc>
        </S.Data>
        <S.Data>
          <S.DataTitle>누적 방문수</S.DataTitle>
          <S.DataDesc>571,146</S.DataDesc>
        </S.Data>
      </S.Datas>
      <Button>
        방문 통계
        <img src="" alt="" />
      </Button>
    </S.Container>
  );
};

export default PageData;