import { useEffect } from 'react';

import useForm from 'hooks/useForm';
import { ReviewType } from 'typings/reviews';
import { shoppingAPI } from 'api/reviews';

import * as S from './ReviewWriteModal.styles';
import ServiceSection from './ServiceSection/@index';
import QualitySection from './QualitySection/@index';
import { validateReviewContent, validateReviewScore } from 'utils/validate';
import {
  DEFAULT_REVIEW_WRITE_FORM,
  DEFAULT_REVIEW_WRITE_ERRORS,
  ERROR_MESSAGE,
} from 'constants/reviews';

const ReviewWriteModal = () => {
  const {
    values,
    isSubmitable,
    setValue,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm<ReviewType>(DEFAULT_REVIEW_WRITE_FORM);

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

  const validateReviewWriteForm = (values: ReviewType) => {
    const { content, score } = values;
    const errors = { ...DEFAULT_REVIEW_WRITE_ERRORS };

    const isValidContent = validateReviewContent(content);
    const isValidScore = validateReviewScore(score);

    if (!isValidContent) errors.content = ERROR_MESSAGE.NULL_CONTENT;
    if (!isValidScore) errors.score = ERROR_MESSAGE.NULL_SCORE;

    return errors;
  };

  const onValid = async () => {
    if (!values || !isSubmitable) return;

    const formData = setDataInToFormData();
    await shoppingAPI.createReview(formData);
  };

  useEffect(() => {
    const newErrors = validateReviewWriteForm(values);
    setErrors(newErrors);
  }, [values, setErrors]);

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
          <S.CreateButton type="submit" disabled={!isSubmitable}>
            작성 완료
          </S.CreateButton>
        </S.ButtonWrap>
      </S.Form>
    </S.Container>
  );
};

export default ReviewWriteModal;
