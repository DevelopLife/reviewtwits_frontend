import styled from '@emotion/styled';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 12px 0;
`;

const Survey = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  width: fit-content;
  gap: 14px 24px;
`;

const SurveyTitle = styled.label`
  grid-column: 1/4;
  color: black;
  padding-right: 6px;
  font-weight: 700;
  font-size: 18px;

  white-space: pre;
`;

const AnswerBox = styled.div``;

const Answer = styled.div``;

const RadioButton = styled.input`
  margin-left: 0;
`;

const AnswerText = styled.label`
  margin-left: 4px;
`;

export { Box, Survey, SurveyTitle, AnswerBox, Answer, RadioButton, AnswerText };
