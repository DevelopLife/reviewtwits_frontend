import { S as ReviewWriteModalStyles } from '../ReviewWriteModal';

const ServiceQuestionBox = () => {
  return (
    <ReviewWriteModalStyles.QuestionBox>
      <ReviewWriteModalStyles.TextBox>
        <ReviewWriteModalStyles.SectionTitle>
          마린컴퍼니(주) 서비스 리뷰
        </ReviewWriteModalStyles.SectionTitle>
        <ReviewWriteModalStyles.Question>
          배송, 포장, 질문, 응대 등 판매자의 전체적인 서비스는 어떠셨나요?
        </ReviewWriteModalStyles.Question>
      </ReviewWriteModalStyles.TextBox>
    </ReviewWriteModalStyles.QuestionBox>
  );
};

export default ServiceQuestionBox;
