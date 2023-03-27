import Image from 'next/image';

import * as S from '../ReviewWriteModal.styles';

const ServiceQuestionBox = () => {
  return (
    <S.QuestionBox>
      {/* <Image
        width={50}
        height={50}
        src=""
        alt=""
        style={{ background: 'gray' }}
      /> */}
      <S.TextBox>
        <S.SectionTitle>마린컴퍼니(주) 서비스 리뷰</S.SectionTitle>
        <S.Question>
          배송, 포장, 질문, 응대 등 판매자의 전체적인 서비스는 어떠셨나요?
        </S.Question>
      </S.TextBox>
    </S.QuestionBox>
  );
};

export default ServiceQuestionBox;
