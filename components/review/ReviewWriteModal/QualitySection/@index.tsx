import { ChangeEvent } from 'react';

import * as S from '../ReviewWriteModal.styles';

import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from './RatingBox';
import { ReviewResponseType, ReviewType } from 'typings/reviews';
import DetailReviewBox from '../QualitySection/DetailReviewBox';
import ImageUploadBox from './ImageUploadBox';
import SurveyBox from './SurveyBox';

interface QualitySectionProps {
  values: ReviewType;
  data?: ReviewResponseType;
  setValue: (name: string, value: number | File[]) => void;
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
      <S.BoxLine />
      <RatingBox score={data?.score} setValue={setValue} />
      <S.BoxLine />
      <DetailReviewBox content={values?.content} handleChange={handleChange} />
      <S.BoxLine />
      <ImageUploadBox
        imageNameList={data?.reviewImageNameList}
        setValue={setValue}
      />
      <S.BoxLine />
      <SurveyBox />
    </S.Section>
  );
};

export default QualitySection;
