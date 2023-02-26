import styled from '@emotion/styled';

import theme from 'styles/theme';
import Form from 'components/common/Form';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RememberMeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

const RememberMeText = styled.label`
  font-size: 16px;
  color: #6d6d6d;
`;

const FindBox = styled.div`
  margin: 24px auto 80px auto;
`;

const FindButton = styled.button`
  background: none;
  outline: none;
  border: none;
  color: #6d6d6d;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const FindId = styled(FindButton)`
  &::after {
    content: '|';
    color: #cacaca;
    margin: 0 10px;
  }
`;

const FindPassword = styled(FindButton)``;

export {
  Form,
  FormContent,
  FormItem,
  WarnText,
  Input,
  ButtonBox,
  Button,
  RememberMeBox,
  CheckBox,
  RememberMeText,
  FindBox,
  FindId,
  FindPassword,
};
