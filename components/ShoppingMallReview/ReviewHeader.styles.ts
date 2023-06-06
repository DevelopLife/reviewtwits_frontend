import styled from '@emotion/styled';

const Container = styled.div`
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
`;

const SortReviewOptions = styled.div`
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
`;

const BestReview = styled.div``;

const Line = styled.div`
  width: 0px;
  height: 21px;

  border: 1px solid #878d91;
`;

const LatestReview = styled.div``;

const SearchAndRateOptions = styled.div`
  width: 570px;
  height: 34px;

  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Search = styled.form`
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
`;

const RateOptions = styled.form`
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
`;

export {
  Container,
  SortReviewOptions,
  BestReview,
  LatestReview,
  Line,
  SearchAndRateOptions,
  Search,
  RateOptions,
};
