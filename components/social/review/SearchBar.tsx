import { ChangeEvent, RefObject, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import SearchIcon from 'public/icons/search.svg';

interface SearchBarProps {
  searchValue: string;
  setIsFocused: (value: boolean) => void;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  searchValue,
  setIsFocused,
  onChangeValue,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = inputRef.current;

    inputElement?.addEventListener('focus', () => setIsFocused(true));

    return () =>
      inputElement?.removeEventListener('focus', () => setIsFocused(true));
  }, [setIsFocused]);

  const props = {
    inputRef,
    value: searchValue,
    onChange: onChangeValue,
  };

  return <SearchBarView {...props} />;
};

interface SearchBarViewProps {
  inputRef: RefObject<HTMLInputElement>;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBarView = ({ inputRef, ...rest }: SearchBarViewProps) => {
  return (
    <S.Box>
      <S.Bar>
        <S.IconWrap>
          <SearchIcon />
        </S.IconWrap>
        <S.Input
          ref={inputRef}
          autoComplete="off"
          type="text"
          name="productName"
          spellCheck={false}
          {...rest}
        />
      </S.Bar>
    </S.Box>
  );
};

export default SearchBar;

const S = {
  Box: styled.div``,

  Bar: styled.div`
    position: relative;
  `,

  IconWrap: styled.div`
    position: absolute;
    top: 12px;
    left: 14px;
  `,

  Input: styled.input`
    font-size: 16px;

    width: 100%;
    padding: 10px 12px 10px 40px;
    border: 2px solid ${({ theme }) => theme.colors.gray_4};
    outline: none;
  `,
};
