import styled from '@emotion/styled';

import Shadow from './common/Shadow';

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

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 1360px;
    height: auto;

    padding-top: 52px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 31.85px;
  `,

  LeadTimeTitle: styled.h3`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    /* Black */

    color: #181818;
  `,

  GraphBox: styled.div`
    width: 1360px;
    height: 577.15px;

    border: 1px solid black;
  `,
};

export default LeadTimeRate;
