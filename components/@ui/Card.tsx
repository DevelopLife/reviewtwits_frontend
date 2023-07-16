import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Colors } from 'styles/theme';

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

const ReviewCard = ({ children }: any) => {
  return <ReviewStyledCard>{children}</ReviewStyledCard>;
};

const SocialCard = ({ children, color }: any) => {
  return <SocialStyledCard color={color}>{children}</SocialStyledCard>;
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

const SocialStyledCard = styled.div<{ color?: Colors }>`
  display: flex;
  justify-content: center;

  width: 510px;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.21);

  background: ${({ color, theme }) => color && theme.colors[color]};
  color: ${({ color }) => (color ? 'white' : 'text_black_100')};
`;

export { Card, ReviewCard, SocialCard };
