import styled from '@emotion/styled';
import { CommonButtonStyleAttributes } from 'components/Project/install/common/Button';

const Button = styled.button<CommonButtonStyleAttributes>`
  border: none;
  border-radius: 15px;
  font-weight: 500;
  font-size: 18px;
  overflow: hidden;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ theme, color }) => theme.colors[color]};
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
`;

export { Button };
