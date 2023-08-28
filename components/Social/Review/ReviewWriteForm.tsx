import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import useForm from 'hooks/useForm';
import {
  validateURL,
  validateReviewContent,
  validateReviewScore,
} from 'utils/validate';
import {
  DEFAULT_REVIEW_WRITE_ERRORS,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from 'constants/reviews';
import { ReviewType } from 'typings/reviews';

import ImageUploadBox from 'components/Review/Common/ImageUploadBox';
import ReviewCreateButton from 'components/Review/Common/ReviewCreateButton';
import ReviewTextArea from 'components/Review/Common/ReviewTextArea';
import SearchBox from './SearchBox';
import { PAGE_LIST } from 'constants/routers';
import { usePostReview, usePostReviewComment } from 'hooks/queries/sns';

const ReviewWriteForm = () => {
  const router = useRouter();
  const {
    values,
    isSubmitable,
    setValue,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm<ReviewType>({
    productURL: '',
    content: '',
    score: 0,
    productName: '',
    newImageFiles: [],
  });
  // const { mutate: mutateCreate, isLoading } = useMutation(
  //   (data: FormData) => snsAPI.createReview(data),
  //   {
  //     onSuccess: () => {
  //       alert(SUCCESS_MESSAGE.CREATE);
  //       router.push(PAGE_LIST.SOCIAL_HOME);
  //     },
  //     onError: ({ response }) => {
  //       switch (response?.status) {
  //         case 400:
  //           alert(response.data[0].message);
  //           break;
  //       }
  //     },
  //   }
  // );

  const afterSuccessPost = () => {
    alert(SUCCESS_MESSAGE.CREATE);
    router.push(PAGE_LIST.SOCIAL_HOME);
  };
  const { mutate: mutateCreate, isLoading } = usePostReview(afterSuccessPost);

  const setDataInToFormData = () => {
    const formData = new FormData();
    const { productURL, productName, content, score, newImageFiles } = values;

    formData.append('score', score.toString());
    formData.append('content', content);
    formData.append('productURL', productURL);
    if (productName) formData.append('productName', productName);
    newImageFiles?.forEach((image) =>
      formData.append('multipartImageFiles', image)
    );

    return formData;
  };

  const onValid = () => {
    if (isLoading) return;

    const formData = setDataInToFormData();
    mutateCreate(formData);
  };

  const validateForm = (values: ReviewType) => {
    const { productURL, content, score } = values;
    const errors = { ...DEFAULT_REVIEW_WRITE_ERRORS };

    const isValidProductURL = validateURL(productURL);
    const isValidContent = validateReviewContent(content);
    const isValidScore = validateReviewScore(score);

    if (!isValidProductURL) errors.productURL = ERROR_MESSAGE.INVALID_URL;
    if (!isValidContent) errors.content = ERROR_MESSAGE.NULL_CONTENT;
    if (!isValidScore) errors.score = ERROR_MESSAGE.NULL_SCORE;

    return errors;
  };

  useEffect(() => {
    const newErrors = validateForm(values);
    setErrors(newErrors);
  }, [values, setErrors]);

  const props = {
    values,
    isSubmitable,
    setValue,
    onValid,
    handleChange,
    handleSubmit,
  };

  return <ReviewWriteFormView {...props} />;
};

interface ReviewWriteFormViewProps {
  values: ReviewType;
  isSubmitable: boolean;
  setValue: (name: string, value: File[] | string[] | string | number) => void;
  onValid: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, onValid: () => void) => void;
}

const ReviewWriteFormView = ({
  values,
  isSubmitable,
  setValue,
  onValid,
  handleChange,
  handleSubmit,
}: ReviewWriteFormViewProps) => {
  return (
    <S.Form onSubmit={(e) => handleSubmit(e, onValid)}>
      <S.FormTitle>리뷰 작성</S.FormTitle>
      <S.FormContent>
        <S.ReviewFor>상품 검색</S.ReviewFor>
        <SearchBox productName={values.productName} setValue={setValue} />
        <S.ReviewFor>상품 URL</S.ReviewFor>
        <S.Input
          type="text"
          name="productURL"
          onChange={handleChange}
          value={values.productURL}
        />
        <S.ReviewFor>상세 리뷰</S.ReviewFor>
        <ReviewTextArea content={values?.content} handleChange={handleChange} />
        <S.ImageUploadBoxWrap>
          <ImageUploadBox buttonColor="blue_0" setValue={setValue} />
        </S.ImageUploadBoxWrap>
      </S.FormContent>
      <S.ButtonWrap>
        <ReviewCreateButton color="blue_0" disabled={!isSubmitable}>
          작성 완료
        </ReviewCreateButton>
      </S.ButtonWrap>
    </S.Form>
  );
};

export default ReviewWriteForm;

const S = {
  Form: styled.form``,

  FormTitle: styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: black;

    margin-bottom: 40px;
  `,

  FormContent: styled.div`
    display: grid;
    grid-template-columns: 110px auto;
    gap: 24px 0;
  `,

  ReviewFor: styled.label`
    color: black;
    font-size: 18px;
    white-space: pre;
  `,

  Input: styled.input`
    font-size: 16px;

    width: 100%;
    padding: 10px 12px;
    border: 2px solid ${({ theme }) => theme.colors.gray_4};
    outline: none;
  `,

  ImageUploadBoxWrap: styled.div`
    grid-column: 1 / 3;
  `,

  ButtonWrap: styled.div`
    display: flex;
    justify-content: flex-end;

    margin-top: 70px;
  `,
};
