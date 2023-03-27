import styled from '@emotion/styled';
import theme from 'styles/theme';

import * as S from '../ReviewWriteModal.styles';

const SectionTitle = S.SectionTitle;

const ReviewFor = S.ReviewFor;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > label {
    margin-top: 12px;
  }
`;

const TextArea = styled.textarea`
  width: 790px;
  height: 256px;
  padding: 14px;
  font-size: 14px;

  outline: none;
  resize: none;
  border: ${({ theme }) => `2px solid ${theme.colors.gray_4}`};

  &::placeholder {
    color: ${theme.colors.gray_5};
  }
`;

export { SectionTitle, Box, ReviewFor, TextArea };
