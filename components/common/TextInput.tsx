import styled from '@emotion/styled';

interface TextInputProps {
  placeholder: string;
}

const TextInput = ({ placeholder }: TextInputProps) => (
  <Input type="text" placeholder={placeholder} />
);

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid #9b9b9b;
  font-size: 18px;
  padding: 16px 20px;

  ::placeholder {
    color: #9b9b9b;
  }
`;

export default TextInput;
