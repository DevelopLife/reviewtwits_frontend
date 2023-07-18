import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import styled from '@emotion/styled';

import useForm from 'hooks/useForm';
import {
  useCreateShoppingMallReview,
  useEditShoppingMallReview,
  useGetShoppingMallReview,
} from 'hooks/queries/shopping';
import type { ReviewResponseType, ReviewType } from 'typings/reviews';
import { validateReviewContent, validateReviewScore } from 'utils/validate';
import { DEFAULT_REVIEW_WRITE_ERRORS, ERROR_MESSAGE } from 'constants/reviews';
import theme from 'styles/theme';
import ServiceSection from 'components/@feature/@shopping/Review/ReviewWriteModal/ServiceSection/@index';
import QualitySection from './QualitySection/@index';
import ReviewCreateButton from '../Common/ReviewCreateButton';

// // TODO: DELETE

const mockReviewData: ReviewResponseType = {
  productUrl:
    'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/290346317532916-57e0ca03-9d04-4aed-b5ec-19442d97c7ac.png',
  productName: '코멧 사선컷팅 테이프 크리너 핸들 + 거치대 세트',
  createdDate: [],
  lastModifiedDate: [],
  reviewId: 0,
  projectId: 0,
  starScore: 0,
  score: 0,
  content: '',
  reviewImageUrlList: [],
  userInfo: {
    accountId: 'string',
    birthDate: 'string',
    gender: 'string',
    introduceText: 'string',
    nickname: 'string',
    phoneNumber: 'string',
    profileImageUrl: 'string',
  },
  isScrapped: false,
};

export interface ReviewWriteModalProps extends ParsedUrlQuery {
  productURL: string;
  title: string;
}

const ReviewWriteModal = ({ productURL, title }: ReviewWriteModalProps) => {
  const router = useRouter();
  const productId = Number(router?.query?.id);
  const isEditPage = productId ? true : false;
  const { data: reviewData } = useGetShoppingMallReview(title);

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
  const { mutate: mutateEdit } = useEditShoppingMallReview(productId);

  const setDataInToFormData = () => {
    const formData = new FormData();
    const { productURL, content, score, newImageFiles, deleteImageList } =
      values;

    formData.append('score', score.toString());
    formData.append('content', content);
    formData.append('productURL', productURL);
    formData.append('productName', title);
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

  // if (!reviewData) return <div>등록되지 않은 상품입니다.</div>;

  return (
    <S.Container>
      <S.Title>리뷰 관리</S.Title>
      <S.Form onSubmit={(e) => handleSubmit(e, onValid)}>
        <S.ReviewContent>
          <ServiceSection />
          <QualitySection
            reviewData={mockReviewData}
            formValues={values}
            setValue={setValue}
            handleChange={handleChange}
          />
        </S.ReviewContent>
        <S.ButtonWrap>
          <ReviewCreateButton disabled={!isSubmitable}>
            {isEditPage ? '수정 완료' : '작성 완료'}
          </ReviewCreateButton>
        </S.ButtonWrap>
      </S.Form>
    </S.Container>
  );
};

export default ReviewWriteModal;

export const S = {
  Section: styled.section`
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding: 30px 0;
  `,

  QuestionBox: styled.div`
    display: flex;
    gap: 12px;
  `,

  TextBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,

  SectionTitle: styled.h3`
    font-size: 22px;
    font-weight: 700;
  `,

  Question: styled.p`
    font-size: 14px;
    color: ${theme.colors.gray_6};
  `,

  ReviewFor: styled.label`
    color: black;
    white-space: pre;
    font-size: 16px;
    font-weight: 500;
  `,

  Container: styled.div`
    width: 1000px;
    padding: 60px;
  `,

  Title: styled.h1`
    font-weight: 500;
    font-size: 36px;
    margin: 10px 0;
  `,

  ReviewContent: styled.div`
    padding: 0;
  `,

  Form: styled.form``,

  ButtonWrap: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;
  `,
};
