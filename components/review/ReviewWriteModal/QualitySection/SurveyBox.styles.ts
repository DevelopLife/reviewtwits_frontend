import styled from '@emotion/styled';

const Box = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(3, auto);
  width: fit-content;
  gap: 14px 24px;

  margin-left: 60px;
`;

const Survey = styled.div``;

const SurveyTitle = styled.label`
  color: black;
  text-align: right;
  padding-right: 6px;
  font-weight: 500;

  white-space: pre;
`;

const AnswerBox = styled.div``;

const Answer = styled.div``;

const RadioButton = styled.input``;

const AnswerText = styled.label`
  margin-left: 3px;
`;

export { Box, Survey, SurveyTitle, AnswerBox, Answer, RadioButton, AnswerText };
