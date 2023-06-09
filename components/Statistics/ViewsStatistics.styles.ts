import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 1360px;
  height: 100%;

  padding-top: 52px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 31.85px;
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
  width: 1360px;
  flex: 1;
`;

export {
  Container,
  StatisticsTitle,
  StatisticsSubTitle,
  StatisticsHeader,
  GraphBox,
};
