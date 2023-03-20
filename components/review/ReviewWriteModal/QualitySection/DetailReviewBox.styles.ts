import styled from '@emotion/styled';
import theme from 'styles/theme';

import * as S from '../ReviewWriteModal.styles';

const ReviewFor = S.ReviewFor;

const Box = styled.div`
  display: flex;
  margin-left: 100px;

  & > label {
    margin-top: 12px;
  }
`;

const TextArea = styled.textarea`
  width: 790px;
  height: 255px;
  margin: 0 14px;
  padding: 14px;
  font-size: 14px;

  outline: none;
  resize: none;

  &::placeholder {
    color: ${theme.colors.gray_5};
  }
`;

export { Box, ReviewFor, TextArea };
