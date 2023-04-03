import React from 'react';
import Shadow from './common/Shadow';
import * as S from './LeadTimeRate.styles';

const LeadTimeRate = () => {
  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.LeadTimeTitle>시간별 리드타임 비율</S.LeadTimeTitle>
        <S.GraphBox>꺾은선 그래프 들어갈 자리</S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default LeadTimeRate;
