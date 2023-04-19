import { ChangeEvent } from 'react';

import * as S from '../ReviewWriteModal.styles';

import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from 'components/review/common/RatingBox';
import { ReviewResponseType, ReviewType } from 'typings/reviews';
import DetailReviewBox from '../QualitySection/DetailReviewBox';
import ImageUploadBox from 'components/review/common/ImageUploadBox';
import SurveyBox from './SurveyBox';

interface QualitySectionProps {
  values: ReviewType;
  data?: ReviewResponseType;
  setValue: (name: string, value: number | File[] | string[]) => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const QualitySection = ({
  values,
  data,
  setValue,
  handleChange,
}: QualitySectionProps) => {
  return (
    <S.Section>
      <QualityQuestionBox />
      <RatingBox score={data?.score} setValue={setValue} />
      <DetailReviewBox content={values?.content} handleChange={handleChange} />
      <ImageUploadBox
        buttonColor="primary"
        imageNameList={data?.reviewImageNameList}
        setValue={setValue}
      />
      <SurveyBox />
    </S.Section>
  );
};

export default QualitySection;
