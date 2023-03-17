import styled from '@emotion/styled';
import theme from 'styles/theme';

const SatisfactionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 24px 10px 0 10px;
`;

const ReviewFor = styled.label`
  color: black;
  margin-right: 14px;
  white-space: pre;
  font-size: 16px;
`;

const ThumbButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;

const ThumbButton = styled.button`
  border-radius: 50%;
  background: white;
  padding: 10px 12px;
  border: 1px solid ${theme.colors.gray_2};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ThumbsUpButton = styled(ThumbButton)``;

const ThumbsDownButton = styled(ThumbButton)`
  rotate: 180deg;
`;

export {
  SatisfactionBox,
  ReviewFor,
  ThumbButtonBox,
  ThumbsUpButton,
  ThumbsDownButton,
};
