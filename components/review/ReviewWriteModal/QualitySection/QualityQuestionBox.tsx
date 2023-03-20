import Image from 'next/image';

import * as S from '../ReviewWriteModal.styles';
import CartIcon from 'public/images/cart_icon.svg';

const QualityQuestionBox = () => {
  return (
    <S.QuestionBox>
      <Image width={50} height={50} src={CartIcon} alt="" />
      <S.TextBox>
        <S.SectionTitle>상품 품질 리뷰</S.SectionTitle>
        <S.Question>이 상품에 대해 얼마나 만족하시나요?</S.Question>
      </S.TextBox>
    </S.QuestionBox>
  );
};

export default QualityQuestionBox;
