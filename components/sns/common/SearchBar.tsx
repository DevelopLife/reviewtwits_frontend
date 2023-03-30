import type { FC, ChangeEventHandler, HTMLAttributes, SVGProps } from 'react';
import { useState } from 'react';

import DetailIcon from 'public/icons/detail.svg';
import * as S from './SearchBar.styles';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const onClick = () => {
    value && console.log('click');
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
