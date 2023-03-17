import * as S from './ReviewWriteModal.styles';
import ServiceSection from './ServiceSection/@index';
import QualitySection from './QualitySection/@index';

const ReviewWriteModal = () => {
  return (
    <S.Container>
      <S.Title>리뷰 관리</S.Title>
      <S.TitleLine />
      <S.ReviewContent>
        <ServiceSection />
        <S.SectionLine />
        <QualitySection />
      </S.ReviewContent>
    </S.Container>
  );
};

export default ReviewWriteModal;
