import React from 'react';
import Shadow from './common/Shadow';
import * as S from './ViewsStatistics.styles';

const ViewsStatistics = () => {
  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.StatisticsTitle>일간 조회수</S.StatisticsTitle>
        <S.GraphBox>막대그래프 들어갈 자리</S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default ViewsStatistics;
