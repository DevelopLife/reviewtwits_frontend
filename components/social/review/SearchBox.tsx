import { useState } from 'react';

import styled from '@emotion/styled';

import SearchBar from './SearchBar';
import RatingBox from 'components/review/common/RatingBox';

interface SearchBoxProps {
  setValue: (name: string, value: number) => void;
}

const SearchBox = ({ setValue }: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const props = {
    setValue,
  };

  return <SearchBoxView {...props} />;
};

interface SearchBoxViewProps {
  setValue: (name: string, value: number) => void;
}

const SearchBoxView = ({ setValue }: SearchBoxViewProps) => {
  return (
    <S.SearchBox>
      <S.SearchBarWrap>
        <SearchBar />
        <S.ProductList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
            <S.Product key={i}>productName</S.Product>
          ))}
        </S.ProductList>
      </S.SearchBarWrap>
      <S.GuideText>
        찾으시는 상품이 없으신가요? 해당 작성하신 상품 URL로 상품 등록하기
      </S.GuideText>
      <RatingBox setValue={setValue} />
    </S.SearchBox>
  );
};

export default SearchBox;

const S = {
  SearchBox: styled.div``,

  SearchBarWrap: styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
  `,

  ProductList: styled.ul`
    position: absolute;
    top: 40px;
    left: 0;

    width: 100%;
    max-height: 220px;
    overflow-y: scroll;
    background-color: white;
    border: 1px solid gray;
    padding: 10px 0;
  `,

  Product: styled.li`
    background-color: white;
    padding: 8px 12px;

    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `,

  GuideText: styled.small`
    display: inline-block;
    margin: 14px 0;

    width: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
  `,
};
