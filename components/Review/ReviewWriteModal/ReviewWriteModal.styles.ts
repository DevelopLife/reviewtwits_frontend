import styled from '@emotion/styled';
import theme from 'styles/theme';

/// common

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 30px 0;
`;

const QuestionBox = styled.div`
  display: flex;
  gap: 12px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

const Question = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray_6};
`;

const ReviewFor = styled.label`
  color: black;
  white-space: pre;
  font-size: 16px;
  font-weight: 500;
`;

const Button = styled.button`
  background: ${theme.colors.primary};
  color: white;

  outline: none;
  border: none;
  border-radius: 30px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

///

const Container = styled.div`
  width: 1000px;
  padding: 60px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin: 10px 0;
`;

const ReviewContent = styled.div`
  padding: 0;
`;

const Form = styled.form``;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
`;

const CreateButton = styled(Button)`
  font-size: 18px;
  font-weight: 600;
  padding: 17px 37px;
  border-radius: 15px;

  &:disabled {
    background: ${({ theme }) => theme.colors.gray_5};
    cursor: default;

    :hover {
      opacity: 1;
    }
  }
`;

export {
  Container,
  Title,
  Form,
  ReviewContent,
  Section,
  QuestionBox,
  TextBox,
  SectionTitle,
  Question,
  ReviewFor,
  Button,
  ButtonWrap,
  CreateButton,
};
