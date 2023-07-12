import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import { atomReviewSortButtonState } from 'states/atomReveiw';

const ReviewHeader = () => {
  const [searchOption, setSearchOption] = useRecoilState(
    atomReviewSortButtonState
  );

  const handleSetSearchOption = (selectingOption: 'BEST' | 'NEWEST') => {
    setSearchOption({ selected: selectingOption });
  };
  const handleClickBestReview = () => {
    handleSetSearchOption('BEST');
  };

  const handleClickNewReview = () => {
    handleSetSearchOption('NEWEST');
  };

  return (
    <S.Container>
      <S.SortReviewOptions>
        <S.BestReview
          onClick={handleClickBestReview}
          isSelected={searchOption.selected === 'BEST'}
        >
          베스트순
        </S.BestReview>
        <S.Line></S.Line>
        <S.LatestReview
          onClick={handleClickNewReview}
          isSelected={searchOption.selected === 'NEWEST'}
        >
          최신순
        </S.LatestReview>
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

const S = {
  Container: styled.div`
    width: 1100px;
    height: 74px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: #292a2b;
    border-radius: 10px;

    padding-left: 32px;
    padding-right: 32px;
  `,

  SortReviewOptions: styled.div`
    width: 123px;
    height: 19px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    cursor: pointer;

    color: #ffffff;
  `,

  BestReview: styled.div<{ isSelected: boolean }>`
    &:hover {
      scale: 1.05;
    }
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.secondary : theme.colors.white};
  `,

  LatestReview: styled.div<{ isSelected: boolean }>`
    &:hover {
      scale: 1.05;
    }
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.secondary : theme.colors.white};
  `,

  Line: styled.div`
    width: 0px;
    height: 21px;

    border: 1px solid #878d91;
  `,

  SearchAndRateOptions: styled.div`
    width: 570px;
    height: 34px;

    display: flex;
    flex-direction: row;
    gap: 16px;
  `,

  Search: styled.form`
    width: 277px;
    height: 34px;
    background: #ffffff;
    border-radius: 6px;
    width: 100%;
    display: flex;

    input {
      border-radius: 6px;
      height: 100%;
      flex: 1;
      border: none;
      outline: none;
      margin-left: 12px;
    }
    button {
      height: 100%;
      border-radius: 6px;
      background: #ffffff;
      border: none;
      outline: none;
      margin-right: 5px;
    }
  `,

  RateOptions: styled.form`
    width: 277px;
    height: 34px;
    background: #ffffff;
    border-radius: 6px;
    width: 100%;
    display: flex;

    input {
      border-radius: 6px;
      height: 100%;
      flex: 1;
      border: none;
      outline: none;
      margin-left: 12px;
    }
    button {
      height: 100%;
      border-radius: 6px;
      background: #ffffff;
      border: none;
      outline: none;
      margin-right: 5px;
    }
  `,
};
