import type { FC, ChangeEventHandler, HTMLAttributes, SVGProps } from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

import DetailIcon from 'public/icons/detail.svg';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const onClick = () => {
    true;
  };

  return (
    <SearchBarView
      value={value}
      Icon={DetailIcon}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

interface SearchBarViewProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const SearchBarView = ({
  value,
  Icon,
  onClick,
  ...rest
}: SearchBarViewProps) => {
  const padding = '5px 40px 5px 15px';

  return (
    <S.SearchInputWrap>
      <S.SearchInput
        type="search"
        name="question"
        value={value}
        padding={padding}
        width={230}
        height={40}
        {...rest}
      />
      <S.AbsoluteIcon right={20} onClick={onClick}>
        <Icon />
      </S.AbsoluteIcon>
    </S.SearchInputWrap>
  );
};

export default SearchBar;

const S = {
  SearchInputWrap: styled.span`
    width: fit-content;
    position: relative;
    display: flex;
    align-items: center;

    margin-bottom: 40px;
  `,
  SearchInput: styled.input<{
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
  `,
  AbsoluteIcon: styled.span<{ left?: number; right?: number }>`
    position: absolute;
    left: ${({ left }) => left}px;
    right: ${({ right }) => right}px;

    :hover {
      cursor: pointer;
    }
  `,
};
