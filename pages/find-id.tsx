import styled from '@emotion/styled';
import { emailsAPI } from 'api/emails';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { DEFAULT_FIND_ID_FORM, SIGN_UP_FORM_NAMES } from 'constants/account';
import useForm from 'hooks/useForm';
import React from 'react';

const findId = () => {
  const {
    values,
    errors,
    isSubmitable,
    setValue,
    setErrors,
    handleChange,
    handleSubmit,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({ ...DEFAULT_FIND_ID_FORM });

  const handleFindId = () => {
    // 01041821252
    // 2023-03-29
    emailsAPI.findIds(values);
  };

  return (
    <div>
      <div>
        <h1>아이디를 잊어버리셨나요?</h1>
        <p>가입할 때 작성했던 정보를 입력해주세요</p>
      </div>
      <div>
        <S.FormItem>
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
      </div>
      <ul>
        <button onClick={handleFindId}>아이디 찾기</button>
        <li>로그인 페이지로 이동</li>
      </ul>
    </div>
  );
};

export default findId;

const S = {
  DivideBox: styled.div`
    display: flex;
    gap: 20px;

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
};
