import { ChangeEvent } from 'react';

import styled from '@emotion/styled';

interface TextInputProps {
  type?: string;
  name: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', handleChange, ...rest }: TextInputProps) => (
  <StyledInput
    type={type}
    autoComplete="off"
    onChange={handleChange}
    {...rest}
  />
);

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid #9b9b9b;
  font-size: 18px;
  padding: 16px 20px;
  width: 100%;

  ::placeholder {
    color: #9b9b9b;
  }
`;

export default Input;
