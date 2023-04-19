import { ChangeEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ProductSearchResultType } from 'typings/product';

import styled from '@emotion/styled';
import SearchBar from './SearchBar';
import RatingBox from 'components/review/common/RatingBox';
import itemsAPI from 'api/items';

interface SearchBoxProps {
  setValue: (name: string, value: number) => void;
}

const SearchBox = ({ setValue }: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { data: searchResult } = useQuery<ProductSearchResultType[]>(
    ['searchProductName', searchValue],
    () => itemsAPI.searchProductName(searchValue),
    {
      enabled: !!searchValue,
    }
  );

  const highlightText = (text: string) => {
    return text.replaceAll(
      searchValue,
      `<span style="color: #4c80f1; font-weight: 600">${searchValue}</span>`
    );
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const props = {
    searchResult,
    setValue,
    highlightText,
    onChangeValue,
  };

  return <SearchBoxView {...props} />;
};

interface SearchBoxViewProps {
  searchResult?: ProductSearchResultType[];
  setValue: (name: string, value: number) => void;
  highlightText: (text: string) => string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBoxView = ({
  searchResult,
  setValue,
  highlightText,
  onChangeValue,
}: SearchBoxViewProps) => {
  return (
    <S.SearchBox>
      <S.SearchBarWrap>
        <SearchBar onChangeValue={onChangeValue} />
        {searchResult && searchResult?.length > 0 && (
          <S.ProductList>
            {searchResult.map((result, i) => (
              <S.Product
                key={i}
                dangerouslySetInnerHTML={{
                  __html: highlightText(result.keyword),
                }}
              />
            ))}
          </S.ProductList>
        )}
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

  Highlight: styled.span``,

  GuideText: styled.small`
    display: inline-block;
    margin: 14px 0;

    width: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
  `,
};
