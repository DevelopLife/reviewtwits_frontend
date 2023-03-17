import * as S from '../ReviewWriteModal.styles';
import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from './RatingBox';
import DetailReviewBox from '../QualitySection/DetailReviewBox';

const QualitySection = () => {
  return (
    <S.Section>
      <QualityQuestionBox />
      <RatingBox />
      <DetailReviewBox />
    </S.Section>
  );
};

export default QualitySection;
