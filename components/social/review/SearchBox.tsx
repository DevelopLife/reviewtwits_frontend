import styled from '@emotion/styled';

import SearchBar from './SearchBar';
import RatingBox from 'components/review/common/RatingBox';

interface SearchBoxProps {
  setValue: (name: string, value: number) => void;
}

const SearchBox = ({ setValue }: SearchBoxProps) => {
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
        <S.GuideText>
          찾으시는 상품이 없으신가요? 해당 작성하신 상품 URL로 상품 등록하기
        </S.GuideText>
      </S.SearchBarWrap>
      <RatingBox setValue={setValue} />
    </S.SearchBox>
  );
};

export default SearchBox;

const S = {
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
};
