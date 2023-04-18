import { ChangeEvent } from 'react';

import styled from '@emotion/styled';

import SearchIcon from 'public/icons/search.svg';

interface SearchBarProps {
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChangeValue }: SearchBarProps) => {
  const props = {
    onChangeValue,
  };

  return <SearchBarView {...props} />;
};

interface SearchBarViewProps {
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBarView = ({ onChangeValue }: SearchBarViewProps) => {
  return (
    <S.Box>
      <S.Bar>
        <S.IconWrap>
          <SearchIcon />
        </S.IconWrap>
        <S.Input type="text" name="productName" onChange={onChangeValue} />
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
