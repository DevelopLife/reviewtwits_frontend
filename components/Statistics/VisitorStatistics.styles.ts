import styled from '@emotion/styled';
import { Colors } from 'styles/theme';

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  padding-left: 40px;
  padding-right: 40px;
`;

const VisitorInfoBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 68px;
  max-width: 120px;
`;

const VisitorInfo = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* Black */

  color: #181818;
`;

const VisitorTotalNumber = styled.p<{ pointColor?: Colors }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  color: ${({ theme, pointColor }) =>
    pointColor ? theme.colors[pointColor] : theme.colors['black']};
`;

export { Container, VisitorInfoBox, VisitorInfo, VisitorTotalNumber };
