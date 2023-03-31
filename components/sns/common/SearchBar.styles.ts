import styled from '@emotion/styled';

const SearchInputWrap = styled.span`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;

  margin-bottom: 40px;
`;
const SearchInput = styled.input<{
  padding: string;
  width?: number;
  height?: number;
}>`
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
`;
const AbsoluteIcon = styled.span<{ left?: number; right?: number }>`
  position: absolute;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;

  :hover {
    cursor: pointer;
  }
`;

export { SearchInputWrap, SearchInput, AbsoluteIcon };
