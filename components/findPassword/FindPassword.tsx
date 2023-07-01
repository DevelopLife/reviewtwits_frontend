import styled from '@emotion/styled';
import { emailsAPI } from 'api/emails';
import Button from 'components/Common/Button';
import Card from 'components/Common/Card';
import Input from 'components/Common/Input';
import {
  DEFAULT_FIND_PASSWORD_FORM,
  ERROR_MESSAGE,
  SIGN_UP_FORM_NAMES,
} from 'constants/account';
import { PAGE_LIST } from 'constants/routers';
import useForm from 'hooks/useForm';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { findUserPasswords } from 'states/atomFindUserInfo';
import { FindPasswordType } from 'typings/account';

interface FindPasswordProps {
  handleFindPassword: (params: FindPasswordType) => Promise<number>;
}

const FindPassword = ({ handleFindPassword }: FindPasswordProps) => {
  const setFindPasswordValues = useSetRecoilState(findUserPasswords);

  const { values, errors, handleChange } = useForm({
    ...DEFAULT_FIND_PASSWORD_FORM,
  });

  const onClickFindPassword = async () => {
    const status = await handleFindPassword(values);
    if (status !== 200) {
      alert(ERROR_MESSAGE.FIND_PASSWORD);
      return;
    }
    setFindPasswordValues(values);
  };
  return (
    <Card>
      <S.CardHeader>
        <S.CardTitle>비밀번호를 잊어버리셨나요?</S.CardTitle>
        <S.CardDesc>가입할 때 작성했던 정보를 입력해주세요</S.CardDesc>
      </S.CardHeader>
      <S.FormMargin space={63} />

      <S.FormContainer>
        <S.FormItem>
          <S.InputLabel>아이디</S.InputLabel>
          <Input
            name={SIGN_UP_FORM_NAMES.ACCOUND_ID}
            type="email"
            placeholder="이메일"
            handleChange={handleChange}
          />
          <S.FormMargin space={20} />
          <S.InputLabel>휴대폰 번호</S.InputLabel>
          <Input
            name={SIGN_UP_FORM_NAMES.PHONE_NUMBER}
            placeholder="숫자만 입력 ('-' 제외)"
            handleChange={handleChange}
          />
          {values?.phoneNumber && (
            <S.WarnText>{errors?.phoneNumber}</S.WarnText>
          )}
        </S.FormItem>

        <S.DivideBox>
          <S.FormItem>
            <S.InputLabel>생년월일</S.InputLabel>
            <S.DateInput
              name={SIGN_UP_FORM_NAMES.BIRTHDATE}
              type="date"
              onChange={handleChange}
            />
          </S.FormItem>
        </S.DivideBox>
      </S.FormContainer>
      <S.FormMargin space={20} />

      <S.ButtonsContainer>
        <Button
          type="submit"
          large
          color="secondary"
          fontColor="white"
          borderType="none"
          handleClick={onClickFindPassword}
        >
          비밀번호 찾기
        </Button>
        <Link href={PAGE_LIST.SIGN_IN}>
          <Button type="submit" large color="primary">
            로그인 페이지로 이동
          </Button>
        </Link>
      </S.ButtonsContainer>
    </Card>
  );
};

export default FindPassword;

const S = {
  CardHeader: styled.div`
    width: 343px;
    height: 79px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;

    color: #000000;
  `,
  CardTitle: styled.h1`
    font-size: 30px;
    line-height: 36px;
  `,
  CardDesc: styled.p`
    font-size: 20px;
    line-height: 24px;
  `,

  FormContainer: styled.div`
    height: 200px;
    width: 100%;
    margin-bottom: 100px;
  `,

  DivideBox: styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;

    > div {
      width: 50%;
    }
  `,

  FormWrap: styled.div`
    margin: 0 200px;
  `,

  FormContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,

  FormItem: styled.div`
    display: flex;
    flex-direction: column;
    color: black;
  `,

  WarnText: styled.small`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.red_0};
    font-weight: 500;
    margin-top: 10px;
  `,

  InputLabel: styled.label`
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 500;
  `,

  DateInput: styled.input`
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 30px;
    color: white;
    padding: 8px;
    text-align: center;
    font-size: 16px;

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  `,

  EmailBox: styled.div`
    position: relative;
  `,

  VerifyButtonWrap: styled.div`
    position: absolute;
    right: -160px;
    top: 10px;
  `,

  Notice: styled.p`
    font-size: 14px;
    font-weight: 500;
    color: black;
    text-align: center;
    margin: 33px 0 15px 0;
  `,

  ButtonBox: styled.div`
    display: flex;
    gap: 10px;

    > button {
      width: 50%;
    }
  `,

  EmailInputBox: styled.div`
    display: flex;
    align-items: center;
    > input,
    select {
      width: 50%;
    }
  `,

  ButtonsContainer: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,

  FormMargin: styled.div<{ space: number }>`
    height: ${({ space }) => space}px;
  `,
};
