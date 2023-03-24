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
  font-weight: 500;
`;

const Question = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray_6};
`;

const SectionLine = styled.hr`
  margin: 0;
  height: 2px;
  background: ${theme.colors.gray_5};
  border: none;
`;

const ReviewFor = styled.label`
  color: black;
  margin-right: 14px;
  white-space: pre;
  font-size: 16px;
  font-weight: 500;
`;

const Button = styled.button`
  background: ${theme.colors.blue_0};
  color: white;

  outline: none;
  border: none;
  border-radius: 30px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const BoxLine = styled.hr`
  margin: 0;
  height: 1px;
  background: ${theme.colors.gray_4};
  border: none;
`;

///

const Container = styled.div`
  width: 1000px;
  padding: 60px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin: 20px 24px;
`;

const TitleLine = styled.hr`
  height: 2px;
  background: ${theme.colors.gray_8};
  border: none;
  margin: 0;
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
  font-size: 20px;
  padding: 15px 70px;

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
  TitleLine,
  Form,
  ReviewContent,
  Section,
  QuestionBox,
  TextBox,
  SectionTitle,
  Question,
  SectionLine,
  ReviewFor,
  Button,
  BoxLine,
  ButtonWrap,
  CreateButton,
};
