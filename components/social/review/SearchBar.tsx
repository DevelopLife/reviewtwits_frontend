import styled from '@emotion/styled';

import SearchIcon from 'public/icons/search.svg';

const SearchBar = () => {
  return (
    <S.Bar>
      <S.IconWrap>
        <SearchIcon />
      </S.IconWrap>
      <S.Input type="text" />
    </S.Bar>
  );
};

export default SearchBar;

const S = {
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