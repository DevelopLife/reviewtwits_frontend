import * as S from '../ReviewWriteModal.styles';
import QualityQuestionBox from './QualityQuestionBox';
import RatingBox from './RatingBox';

const QualitySection = () => {
  return (
    <S.Section>
      <QualityQuestionBox />
      <RatingBox />
    </S.Section>
  );
};

export default QualitySection;
