import styled from '@emotion/styled';

import Card from 'components/common/Card';
import Form from 'components/common/Form';
import Button from 'components/common/Button';
import Input from 'components/common/Input';

const FormContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 36px;

  width: 387px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const UserImageBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;
`;

const ImageUploadButton = styled.button`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};

  background: none;
  border: none;
`;

const ImageUploadInput = styled.input`
  display: none;
`;

const IntroductionInput = styled.input`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray_5};
  outline: none;
  border-radius: 10px;

  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_5};
  }
`;

const InputLabel = styled.label`
  color: black;
  font-weight: 500;
  font-size: 18px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export {
  Card,
  Form,
  FormContent,
  FormItem,
  UserImageBox,
  ImageUploadButton,
  ImageUploadInput,
  IntroductionInput,
  InputLabel,
  Input,
  ButtonBox,
  Button,
};
