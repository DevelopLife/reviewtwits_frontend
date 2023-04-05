import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import styled from '@emotion/styled';

import useForm from 'hooks/useForm';
import {
  validateURL,
  validateReviewContent,
  validateReviewScore,
} from 'utils/validate';
import { DEFAULT_REVIEW_WRITE_ERRORS, ERROR_MESSAGE } from 'constants/reviews';
import { ReviewType } from 'typings/reviews';

import ImageUploadBox from 'components/review/common/ImageUploadBox';
import RatingBox from 'components/review/common/RatingBox';
import ReviewCreateButton from 'components/review/common/ReviewCreateButton';
import ReviewTextArea from 'components/review/common/ReviewTextArea';
import SearchBar from './SearchBar';
import { snsAPI } from 'api/sns';

const ReviewWriteForm = () => {
  const {
    values,
    isSubmitable,
    setValue,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm<ReviewType>({
    productURL: 'http://www.example.com/123',
    content: '',
    score: 0,
    productName: 'productName',
    newImageFiles: [],
  });
  const { mutate: mutateCreate } = useMutation((data: FormData) =>
    snsAPI.createReview(data)
  );

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
    if (!values || !isSubmitable) return;

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
        <S.ReviewFor>상품 URL</S.ReviewFor>
        <S.Input type="text" name="productURL" onChange={handleChange} />
        <S.ReviewFor>상품 검색</S.ReviewFor>
        <S.SearchBox>
          <S.SearchBarWrap>
            <SearchBar />
            <S.GuideText>
              찾으시는 상품이 없으신가요? 해당 작성하신 상품 URL로 상품 등록하기
            </S.GuideText>
          </S.SearchBarWrap>
          <RatingBox setValue={setValue} />
        </S.SearchBox>
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

  SearchBox: styled.div``,

  SearchBarWrap: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
  `,

  GuideText: styled.small`
    margin-bottom: 14px;
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
