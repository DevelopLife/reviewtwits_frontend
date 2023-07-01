import styled from '@emotion/styled';

import type { Colors } from 'styles/theme';
import Shadow from './common/Shadow';

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

const S = {
  Container: styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;

    padding-left: 40px;
    padding-right: 40px;
  `,
  VisitorInfoBox: styled.li`
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: 68px;
    max-width: 120px;
  `,
  VisitorInfo: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* Black */

    color: #181818;
  `,
  VisitorTotalNumber: styled.p<{ pointColor?: Colors }>`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    color: ${({ theme, pointColor }) =>
      pointColor ? theme.colors[pointColor] : theme.colors['black']};
  `,
};
