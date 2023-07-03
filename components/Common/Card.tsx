import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface CardProps {
  children: ReactNode;
  cardType?: 'primary' | 'reviewCard';
}

const Card = ({ children, cardType = 'primary' }: CardProps) => {
  if (cardType === 'reviewCard') {
    return <ReviewStyledCard>{children}</ReviewStyledCard>;
  }

  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 68px;

  background: #f7f7f7;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.09);
  border-radius: 30px;
`;

const ReviewStyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  padding-top: 57px;
  padding-bottom: 48px;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_2};
  box-shadow: 4px 4px 23px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
`;

export default Card;
