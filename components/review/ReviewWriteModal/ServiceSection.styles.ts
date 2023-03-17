import styled from '@emotion/styled';
import theme from 'styles/theme';

import * as S from './ReviewWriteModal.styles';

const Section = S.Section;
const QuestionBox = S.QuestionBox;
const TextBox = S.TextBox;
const SectionTitle = S.SectionTitle;
const Question = S.Question;

const SatisfactionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 0 10px;
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
  Section,
  QuestionBox,
  TextBox,
  SectionTitle,
  Question,
  SatisfactionBox,
  ReviewFor,
  ThumbButtonBox,
  ThumbsUpButton,
  ThumbsDownButton,
};
