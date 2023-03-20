import { ChangeEvent } from 'react';

import * as S from '../ReviewWriteModal.styles';

import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from './RatingBox';
import DetailReviewBox from '../QualitySection/DetailReviewBox';
import ImageUploadBox from './ImageUploadBox';
import SurveyBox from './SurveyBox';

interface QualitySectionProps {
  setValue: (name: string, value: number) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const QualitySection = ({ setValue }: QualitySectionProps) => {
  return (
    <S.Section>
      <QualityQuestionBox />
      <S.BoxLine />
      <RatingBox setValue={setValue} />
      <S.BoxLine />
      <DetailReviewBox />
      <S.BoxLine />
      <ImageUploadBox />
      <S.BoxLine />
      <SurveyBox />
    </S.Section>
  );
};

export default QualitySection;
