import { ChangeEvent } from 'react';

import * as S from '../ReviewWriteModal.styles';

import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from 'components/review/common/RatingBox';
import { ReviewResponseType, ReviewType } from 'typings/reviews';
import DetailReviewBox from '../QualitySection/DetailReviewBox';
import ImageUploadBox from 'components/review/common/ImageUploadBox';
import SurveyBox from './SurveyBox';
import StarRating from 'components/review/common/StarRating';

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
      <QualityQuestionBox />
      <StarRating initialScore={formValues.score} setValue={setValue} />
      <DetailReviewBox
        content={formValues?.content}
        handleChange={handleChange}
      />
      <ImageUploadBox
        buttonColor="primary"
        imageNameList={reviewData?.reviewImageUrlList}
        setValue={setValue}
      />
      {/* <SurveyBox /> */}
    </S.Section>
  );
};

export default QualitySection;
