import type { ChangeEvent } from 'react';

import { S as ReviewWriteModalStyles } from '../ReviewWriteModal';
import type { ReviewResponseType, ReviewType } from 'typings/reviews';
import DetailReviewBox from './DetailReviewBox';
import ImageUploadBox from 'components/Review/Common/ImageUploadBox';
import StarRating from 'components/Review/Common/StarRating';
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
    <ReviewWriteModalStyles.Section>
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
    </ReviewWriteModalStyles.Section>
  );
};

export default QualitySection;
