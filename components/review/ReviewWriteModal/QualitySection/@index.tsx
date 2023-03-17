import * as S from '../ReviewWriteModal.styles';
import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from './RatingBox';
import DetailReviewBox from '../QualitySection/DetailReviewBox';
import ImageUploadBox from './ImageUploadBox';

const QualitySection = () => {
  return (
    <S.Section>
      <QualityQuestionBox />
      <RatingBox />
      <DetailReviewBox />
      <ImageUploadBox />
    </S.Section>
  );
};

export default QualitySection;
