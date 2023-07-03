import { S as ReviewWriteModalStyles } from '../ReviewWriteModal';

const QualityQuestionBox = () => {
  return (
    <ReviewWriteModalStyles.QuestionBox>
      <ReviewWriteModalStyles.TextBox>
        <ReviewWriteModalStyles.SectionTitle>
          상품 품질 리뷰
        </ReviewWriteModalStyles.SectionTitle>
        <ReviewWriteModalStyles.Question>
          이 상품에 대해 얼마나 만족하시나요?
        </ReviewWriteModalStyles.Question>
      </ReviewWriteModalStyles.TextBox>
    </ReviewWriteModalStyles.QuestionBox>
  );
};

export default QualityQuestionBox;
