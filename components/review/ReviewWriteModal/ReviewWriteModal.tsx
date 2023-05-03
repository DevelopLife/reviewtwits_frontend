import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useForm from 'hooks/useForm';
import { ReviewType } from 'typings/reviews';
import { validateReviewContent, validateReviewScore } from 'utils/validate';
import { DEFAULT_REVIEW_WRITE_ERRORS, ERROR_MESSAGE } from 'constants/reviews';

import * as S from './ReviewWriteModal.styles';
import QualitySection from './QualitySection/@index';
import ReviewCreateButton from '../common/ReviewCreateButton';
import {
  useCreateShoppingMallReview,
  useEditShoppingMallReview,
  useGetShoppingMallReview,
  useRegisterShoppingMallProduct,
} from 'hooks/queries/shopping';

const ReviewWriteModal = ({ productURL }: { productURL: string }) => {
  const router = useRouter();
  const reviewId = Number(router?.query?.id);
  const isEditPage = router?.query?.id;
  const { data: reviewData, isLoading } = useGetShoppingMallReview(reviewId);

  const {
    values,
    isSubmitable,
    setValue,
    setErrors,
    initializeForm,
    handleChange,
    handleSubmit,
  } = useForm<ReviewType>({
    productURL: productURL,
    content: '',
    score: 0,
    newImageFiles: [],
  });
  const { mutate: mutateCreate } = useCreateShoppingMallReview();
  // TODO: 제품등록 임시 mutate Function
  const { mutate: mutateRegister } = useRegisterShoppingMallProduct();
  const { mutate: mutateEdit } = useEditShoppingMallReview(reviewId);

  const setDataInToFormData = () => {
    const formData = new FormData();
    const { productURL, content, score, newImageFiles, deleteImageList } =
      values;

    formData.append('score', score.toString());
    formData.append('content', content);
    formData.append('productURL', productURL);
    newImageFiles?.forEach((image) =>
      formData.append('multipartImageFiles', image)
    );
    deleteImageList?.forEach((fileName) =>
      formData.append('deleteFileList', fileName)
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
    const formData = setDataInToFormData();
    isEditPage ? mutateEdit(formData) : mutateCreate(formData);
  };

  useEffect(() => {
    const newErrors = validateReviewWriteForm(values);
    setErrors(newErrors);
  }, [values, setErrors]);

  useEffect(() => {
    // CSR 임시
    if (reviewData) {
      const { content, score, productUrl } = reviewData;
      initializeForm({
        productURL: productUrl,
        content,
        score,
      });
    }
  }, [reviewData, initializeForm]);

  if (isEditPage && isLoading) return null;
  return (
    <S.Container>
      <S.Title>리뷰 관리</S.Title>
      <S.Form onSubmit={(e) => handleSubmit(e, onValid)}>
        <S.ReviewContent>
          {/* <ServiceSection /> */}
          <QualitySection
            reviewData={reviewData}
            formValues={values}
            setValue={setValue}
            handleChange={handleChange}
          />
        </S.ReviewContent>
        <S.ButtonWrap>
          <ReviewCreateButton color="primary" disabled={!isSubmitable}>
            {isEditPage ? '수정 완료' : '작성 완료'}
          </ReviewCreateButton>
        </S.ButtonWrap>
      </S.Form>
    </S.Container>
  );
};

export default ReviewWriteModal;
