import React from 'react';
import * as S from './ReviewHeader.styled';

const ReviewHeader = () => {
  return (
    <S.Container>
      <S.SortReviewOptions>
        <S.BestReview>베스트순</S.BestReview>
        <S.Line></S.Line>
        <S.LatestReview>최신순</S.LatestReview>
      </S.SortReviewOptions>

      <S.SearchAndRateOptions>
        <S.Search action="submit">
          <input type="text" placeholder="상품평을 검색해보세요" />
          <button>Q</button>
        </S.Search>

        <S.RateOptions action="submit">
          <input type="text" placeholder="모든 별점 보기" />
          <button>10,297</button>
        </S.RateOptions>
      </S.SearchAndRateOptions>
    </S.Container>
  );
};

export default ReviewHeader;