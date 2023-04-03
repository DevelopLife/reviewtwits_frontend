import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 1360px;
  height: auto;

  padding-top: 52px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 31.85px;
`;

const LeadTimeTitle = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  /* Black */

  color: #181818;
`;

const GraphBox = styled.div`
  width: 1360px;
  height: 577.15px;

  border: 1px solid black;
`;

export { Container, LeadTimeTitle, GraphBox };
