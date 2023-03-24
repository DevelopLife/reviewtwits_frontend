import styled from '@emotion/styled';

import theme from 'styles/theme';
import Card from 'components/common/Card';
import Form from 'components/common/Form';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const DivideBox = styled.div`
  display: flex;
  gap: 20px;

  > div {
    width: 50%;
  }
`;

const FormWrap = styled.div`
  margin: 0 200px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const WarnText = styled.small`
  font-size: 14px;
  color: ${theme.colors.red_0};
  font-weight: 500;
  margin-top: 10px;
`;

const InputLabel = styled.label`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 500;
`;

const DateInput = styled.input`
  border: none;
  outline: none;
  background: ${theme.colors.black};
  border-radius: 30px;
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 16px;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

const EmailBox = styled.div`
  position: relative;
`;

const VerifyButtonWrap = styled.div`
  position: absolute;
  right: -160px;
  top: 10px;
`;

// const Select = styled.select`
//   outline: none;
//   border: none;
//   background: transparent;
//   border-bottom: 1px solid #9b9b9b;
//   color: #9b9b9b;
//   font-size: 18px;
//   padding: 16px 20px;
// `;

// const Option = styled.option``;

const Notice = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-align: center;
  margin: 33px 0 15px 0;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;

  > button {
    width: 50%;
  }
`;

const EmailInputBox = styled.div`
  display: flex;
  align-items: center;
  > input,
  select {
    width: 50%;
  }
`;

// const At = styled.span`
//   display: inline-block;
//   font-size: 18px;
// `;

export {
  Card,
  FormWrap,
  Form,
  DivideBox,
  FormContent,
  FormItem,
  WarnText,
  InputLabel,
  Input,
  DateInput,
  // Select,
  // Option,
  Notice,
  ButtonBox,
  Button,
  EmailInputBox,
  EmailBox,
  VerifyButtonWrap,
  // At,
};
