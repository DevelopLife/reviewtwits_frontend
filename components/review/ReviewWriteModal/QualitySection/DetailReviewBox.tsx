import { ChangeEvent } from 'react';
import * as S from './DetailReviewBox.styles';
import ReviewTextArea from 'components/Review/common/ReviewTextArea';

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
