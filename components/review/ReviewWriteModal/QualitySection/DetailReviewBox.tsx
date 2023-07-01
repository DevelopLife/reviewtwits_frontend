import { ChangeEvent } from 'react';
import styled from '@emotion/styled';

import ReviewTextArea from 'components/review/common/ReviewTextArea';
import { S as ReviewWriteModalStyles } from 'components/Review/ReviewWriteModal/ReviewWriteModal';

interface DetailReviewBox {
  content: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const DetailReviewBox = ({ ...rest }: DetailReviewBox) => {
  return (
    <S.Box>
      <S.SectionTitle>상세리뷰</S.SectionTitle>
      <ReviewTextArea {...rest} />
    </S.Box>
  );
};

export default DetailReviewBox;

const S = {
  SectionTitle: ReviewWriteModalStyles.SectionTitle,

  ReviewFor: ReviewWriteModalStyles.ReviewFor,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > label {
      margin-top: 12px;
    }
  `,
};
