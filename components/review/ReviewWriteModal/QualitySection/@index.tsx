import { ChangeEvent } from 'react';

import * as S from '../ReviewWriteModal.styles';

import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from './RatingBox';
import DetailReviewBox from '../QualitySection/DetailReviewBox';
import ImageUploadBox from './ImageUploadBox';
import SurveyBox from './SurveyBox';

interface QualitySectionProps {
  setValue: (name: string, value: number | File[]) => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const QualitySection = ({ setValue, handleChange }: QualitySectionProps) => {
  return (
    <S.Section>
      <QualityQuestionBox />
      <S.BoxLine />
      <RatingBox setValue={setValue} />
      <S.BoxLine />
      <DetailReviewBox handleChange={handleChange} />
      <S.BoxLine />
      <ImageUploadBox setValue={setValue} />
      <S.BoxLine />
      <SurveyBox />
    </S.Section>
  );
};

export default QualitySection;
