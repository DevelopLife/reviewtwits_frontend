import styled from '@emotion/styled';

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

export { SectionTitle, Box, ReviewFor };
