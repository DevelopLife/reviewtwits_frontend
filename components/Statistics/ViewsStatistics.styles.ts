import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: 100%;

  padding: 50px 40px;
`;

const StatisticsTitle = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  /* Black */

  color: #181818;
`;

const StatisticsSubTitle = styled.h4`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  color: #181818;
`;

const StatisticsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GraphBox = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const IntervalButtonWrap = styled.div``;

const IntervalButton = styled.button<{ isFocus: boolean }>`
  width: 70px;
  height: 40px;

  ${({ theme, isFocus }) => {
    return css`
      background-color: ${isFocus ? theme.colors.gray_6 : theme.colors.white};
      color: ${isFocus ? theme.colors.white : theme.colors.gray_6};
      border: 1px solid ${theme.colors.gray_6};

      &:first-of-type {
        border-radius: 10px 0 0 10px;
      }

      &:last-child {
        border-radius: 0 10px 10px 0;
      }
    `;
  }}
`;

export {
  Container,
  StatisticsTitle,
  StatisticsSubTitle,
  StatisticsHeader,
  GraphBox,
  IntervalButtonWrap,
  IntervalButton,
};
