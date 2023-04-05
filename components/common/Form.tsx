import { FormEvent, ReactNode } from 'react';
import styled from '@emotion/styled';

interface FormProps {
  title: string;
  children: ReactNode;
  onValid: () => void;
  onInvalid?: () => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    onValid: () => void,
    onInvalid?: () => void
  ) => void;
}

const Form = ({
  title,
  children,
  onValid,
  onInvalid,
  handleSubmit,
}: FormProps) => (
  <StyledForm onSubmit={(e) => handleSubmit(e, onValid, onInvalid)}>
    <Title>{title}</Title>
    {children}
  </StyledForm>
);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 68px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 43px;
`;

export default Form;
