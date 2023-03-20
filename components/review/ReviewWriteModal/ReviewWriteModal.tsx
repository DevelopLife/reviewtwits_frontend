import useForm from 'hooks/useForm';
import { ReviewType } from 'typings/reviews';
import { shoppingAPI } from 'api/reviews';

import * as S from './ReviewWriteModal.styles';
import ServiceSection from './ServiceSection/@index';
import QualitySection from './QualitySection/@index';

const ReviewWriteModal = () => {
  const { values, setValue, handleChange, handleSubmit } = useForm<ReviewType>({
    productURL: 'http://www.example.com/123',
    content: '',
    score: 0,
  });

  const setDataInToFormData = () => {
    const formData = new FormData();
    const { productURL, content, score, imageFiles } = values;

    formData.append('score', score.toString());
    formData.append('content', content);
    formData.append('productURL', productURL);
    imageFiles?.forEach((image) =>
      formData.append('multipartImageFiles', image)
    );

    return formData;
  };

  const onValid = async () => {
    if (!values) return;

    const formData = setDataInToFormData();
    await shoppingAPI.createReview(formData);
  };

  return (
    <S.Container>
      <S.Title>리뷰 관리</S.Title>
      <S.TitleLine />
      <S.Form onSubmit={(e) => handleSubmit(e, onValid)}>
        <S.ReviewContent>
          <ServiceSection />
          <S.SectionLine />
          <QualitySection setValue={setValue} handleChange={handleChange} />
        </S.ReviewContent>
        <S.ButtonWrap>
          <S.CreateButton type="submit">작성 완료</S.CreateButton>
        </S.ButtonWrap>
      </S.Form>
    </S.Container>
  );
};

export default ReviewWriteModal;
