import * as S from '../ReviewWriteModal.styles';

import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from './RatingBox';
import DetailReviewBox from '../QualitySection/DetailReviewBox';
import ImageUploadBox from './ImageUploadBox';
import SurveyBox from './SurveyBox';

const QualitySection = () => {
  return (
    <S.Section>
      <QualityQuestionBox />
      <S.BoxLine />
      <RatingBox />
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
