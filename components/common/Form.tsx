import { FormEvent, ReactNode } from 'react';
import styled from '@emotion/styled';

interface FormProps {
  title: string;
  children: ReactNode;
  onValid: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, fn: () => void) => void;
}

const Form = ({ title, children, onValid, handleSubmit }: FormProps) => (
  <StyledForm onSubmit={(e) => handleSubmit(e, onValid)}>
    <Title>{title}</Title>
    {children}
  </StyledForm>
);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 562px;
  background: #f7f7f7;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.09);
  border-radius: 30px;
  padding: 68px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 43px;
`;

export default Form;
