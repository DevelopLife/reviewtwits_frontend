import * as S from './ReviewWriteModal.styles';
import SatisfactionSection from './ServiceSection';

const ReviewWriteModal = () => {
  return (
    <S.Container>
      <S.Title>리뷰 관리</S.Title>
      <S.TitleLine />
      <S.ReviewContent>
        <SatisfactionSection />
        <S.SectionLine />
      </S.ReviewContent>
    </S.Container>
  );
};

export default ReviewWriteModal;
