import useForm from 'hooks/useForm';
import { ReviewType } from 'typings/reviews';

import * as S from './ReviewWriteModal.styles';
import ServiceSection from './ServiceSection/@index';
import QualitySection from './QualitySection/@index';

const ReviewWriteModal = () => {
  const { setValue, handleChange } = useForm<ReviewType>({
    productURL: 'http://www.example.com/123',
    content: '',
    score: 0,
  });

  return (
    <S.Container>
      <S.Title>리뷰 관리</S.Title>
      <S.TitleLine />
      <S.ReviewContent>
        <ServiceSection />
        <S.SectionLine />
        <QualitySection setValue={setValue} handleChange={handleChange} />
      </S.ReviewContent>
      <S.ButtonWrap>
        <S.CreateButton>작성 완료</S.CreateButton>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default ReviewWriteModal;
