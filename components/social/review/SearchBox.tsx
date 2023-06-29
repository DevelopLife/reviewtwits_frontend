import {
  ChangeEvent,
  MouseEvent,
  useState,
  useRef,
  RefObject,
  useEffect,
  useCallback,
} from 'react';
import { useQuery } from '@tanstack/react-query';

import { ProductInfoType, ProductSearchResultType } from 'typings/product';

import styled from '@emotion/styled';
import SearchBar from './SearchBar';
import RatingBox from 'components/review/common/RatingBox';
import itemsAPI from 'api/items';
import { queryKey } from 'hooks/queries';

interface SearchBoxProps {
  productName?: string;
  setValue: (name: string, value: number | string) => void;
}

const SearchBox = ({ productName, setValue }: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const { data: searchResult } = useQuery<ProductSearchResultType[]>(
    queryKey.searchProductName(searchValue),
    () => itemsAPI.searchProductName(searchValue),
    {
      enabled: !!searchValue,
      refetchOnWindowFocus: false,
    }
  );
  const { data: productInfo, isFetching: isProductInfoFetching } =
    useQuery<ProductInfoType | null>(
      queryKey.productInfo(productName),
      () => (productName ? itemsAPI.getProductInfo(productName) : null),
      {
        enabled: !!productName,
        refetchOnWindowFocus: false,
      }
    );
  const searchRef = useRef<HTMLDivElement>(null);

  const highlightText = (text: string) => {
    return text.replaceAll(
      searchValue,
      `<span style="color: #4c80f1; font-weight: 600">${searchValue}</span>`
    );
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickProduct = (e: MouseEvent<HTMLLIElement>) => {
    const selectedProduct = e.currentTarget.id as string;

    setValue('productName', selectedProduct);
    setSearchValue(selectedProduct);
  };

  const changeProductUrl = useCallback(() => {
    if (!(productInfo && productInfo.productUrl)) return;
    setValue('productURL', productInfo.productUrl);
  }, [productInfo, setValue]);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      if (!searchRef.current?.contains(target)) setIsSearchFocused(false);
    });
  }, []);

  useEffect(() => {
    changeProductUrl();
  }, [productInfo, changeProductUrl]);

  const props = {
    searchRef,
    isSearchFocused,
    isSearchResultExist: searchResult ? searchResult.length > 0 : false,
    isProductInfoFetching,
    productImgUrl: productInfo?.imagePath,
    productName,
    searchValue,
    searchResult,
    setValue,
    setIsFocused: setIsSearchFocused,
    highlightText,
    onChangeValue,
    onClickProduct,
  };

  return <SearchBoxView {...props} />;
};

interface SearchBoxViewProps {
  searchRef: RefObject<HTMLDivElement>;
  isSearchFocused: boolean;
  isSearchResultExist: boolean;
  isProductInfoFetching: boolean;
  productName?: string;
  productImgUrl?: string;
  searchValue: string;
  searchResult?: ProductSearchResultType[];
  setValue: (name: string, value: number) => void;
  setIsFocused: (value: boolean) => void;
  highlightText: (text: string) => string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickProduct: (e: MouseEvent<HTMLLIElement>) => void;
}

const SearchBoxView = ({
  searchRef,
  isSearchFocused,
  isSearchResultExist,
  isProductInfoFetching,
  productName,
  productImgUrl,
  searchResult,
  setValue,
  highlightText,
  onClickProduct,
  ...searchBarProps
}: SearchBoxViewProps) => {
  return (
    <S.SearchBox>
      <S.SearchBarWrap ref={searchRef}>
        <SearchBar {...searchBarProps} />
        {isSearchFocused && isSearchResultExist && (
          <S.ProductList>
            {searchResult?.map((result, i) => (
              <S.Product
                key={i}
                id={result.keyword}
                value={result.keyword}
                dangerouslySetInnerHTML={{
                  __html: highlightText(result.keyword),
                }}
                onClick={onClickProduct}
              />
            ))}
          </S.ProductList>
        )}
      </S.SearchBarWrap>
      {/* <S.GuideText>
        찾으시는 상품이 없으신가요? 해당 작성하신 상품 URL로 상품 등록하기
      </S.GuideText> */}
      <RatingBox
        isFetching={isProductInfoFetching}
        productName={productName}
        productImgUrl={productImgUrl}
        setValue={setValue}
      />
    </S.SearchBox>
  );
};

export default SearchBox;

const S = {
  SearchBox: styled.div``,

  SearchBarWrap: styled.div`
    position: relative;
    margin-bottom: 20px;

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

    z-index: 5;
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
