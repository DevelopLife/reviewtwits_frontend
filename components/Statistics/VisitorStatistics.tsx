import React from 'react';
import Shadow from './common/Shadow';
import * as S from './VisitorStatistics.styles';

const VisitorStatistics = () => {
  return (
    <Shadow boxWidth={682} boxHeight={200}>
      <S.Container>
        <S.VisitorInfoBox>
          <S.VisitorInfo>오늘 방문자수</S.VisitorInfo>
          <S.VisitorTotalNumber>423</S.VisitorTotalNumber>
        </S.VisitorInfoBox>
        <S.VisitorInfoBox>
          <S.VisitorInfo>어제 방문수</S.VisitorInfo>
          <S.VisitorTotalNumber>412</S.VisitorTotalNumber>
        </S.VisitorInfoBox>
        <S.VisitorInfoBox>
          <S.VisitorInfo>누적 방문수</S.VisitorInfo>
          <S.VisitorTotalNumber pointColor="blue_1">
            579,333
          </S.VisitorTotalNumber>
        </S.VisitorInfoBox>
      </S.Container>
    </Shadow>
  );
};

export default VisitorStatistics;
