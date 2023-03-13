import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background: #f7f7f7;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.09);
  border-radius: 30px;
`;

export default Card;
