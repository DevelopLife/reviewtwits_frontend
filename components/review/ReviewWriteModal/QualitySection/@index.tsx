import { ChangeEvent } from 'react';

import * as S from '../ReviewWriteModal.styles';

import QualityQuestionBox from './QualityQuestionBox';
import { ReviewResponseType, ReviewType } from 'typings/reviews';
import DetailReviewBox from './DetailReviewBox';
import ImageUploadBox from 'components/Review/common/ImageUploadBox';
import StarRating from 'components/Review/common/StarRating';
import ProductBox from 'components/Review/ReviewWriteModal/QualitySection/ProductBox';

interface QualitySectionProps {
  formValues: ReviewType;
  reviewData?: ReviewResponseType;
  setValue: (name: string, value: number | File[] | string[]) => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const QualitySection = ({
  formValues,
  reviewData,
  setValue,
  handleChange,
}: QualitySectionProps) => {
  return (
    <S.Section>
      {/* <QualityQuestionBox /> */}
      <ProductBox
        imageUrl={reviewData?.productUrl}
        title={reviewData?.productName}
      >
        <StarRating initialScore={reviewData?.score} setValue={setValue} />
      </ProductBox>
      <DetailReviewBox
        content={formValues?.content}
        handleChange={handleChange}
      />
      <ImageUploadBox
        buttonColor="primary"
        imageNameList={reviewData?.reviewImageUrlList}
        setValue={setValue}
      />
    </S.Section>
  );
};

export default QualitySection;
