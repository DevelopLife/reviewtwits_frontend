import styled from '@emotion/styled';

import ImageUploadBox from 'components/review/common/ImageUploadBox';
import RatingBox from 'components/review/common/RatingBox';
import ReviewCreateButton from 'components/review/common/ReviewCreateButton';
import ReviewTextArea from 'components/review/common/ReviewTextArea';
import SearchBar from './SearchBar';

const ReviewWriteForm = () => {
  return (
    <S.Form>
      <S.FormTitle>리뷰 작성</S.FormTitle>
      <S.FormContent>
        <S.ReviewFor>상품 URL</S.ReviewFor>
        <S.Input type="text" />
        <S.ReviewFor>상품 검색</S.ReviewFor>
        <S.SearchBox>
          <S.SearchBarWrap>
            <SearchBar />
            <S.GuideText>
              찾으시는 상품이 없으신가요? 해당 작성하신 상품 URL로 상품 등록하기
            </S.GuideText>
          </S.SearchBarWrap>
          <RatingBox
            setValue={() => {
              return;
            }}
          />
        </S.SearchBox>
        <S.ReviewFor>상세 리뷰</S.ReviewFor>
        <ReviewTextArea
          content={''}
          handleChange={() => {
            return;
          }}
        />
        <S.ImageUploadBoxWrap>
          <ImageUploadBox
            buttonColor="blue_0"
            setValue={() => {
              return;
            }}
          />
        </S.ImageUploadBoxWrap>
      </S.FormContent>
      <S.ButtonWrap>
        <ReviewCreateButton color="blue_0" disabled={false}>
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
