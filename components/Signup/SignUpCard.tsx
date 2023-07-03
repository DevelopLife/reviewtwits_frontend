import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import styled from '@emotion/styled';

import useForm, { ErrorType } from 'hooks/useForm';
import { usersAPI } from 'api/users';
import { emailsAPI } from 'api/emails';
import { UserFormType, CodeIssuanceType, SignUpType } from 'typings/account';
import {
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  validatePhoneNumber,
} from 'utils/validate';
import {
  DEFAULT_SIGN_UP_FORM,
  DEFAULT_SOCIAL_SIGN_UP_FORM,
  ERROR_MESSAGE,
  GENDER,
  SIGN_UP_FORM_NAMES,
} from 'constants/account';

import { doSignIn } from 'utils/auth';
import { registerAPI } from 'api/oauth';
import { getCookie, removeCookie } from 'utils/cookies';

import theme from 'styles/theme';
import Card from 'components/Common/Card';
import Form from 'components/Common/Form';
import Input from 'components/Common/Input';
import Button from 'components/Common/Button';
import { PAGE_LIST } from 'constants/routers';

const SignUpForm = () => {
  const [signUpType, setSignUpType] = useState<SignUpType>('COMMON');
  const {
    values,
    errors,
    isSubmitable,
    setValue,
    setErrors,
    initializeForm,
    handleChange,
    handleSubmit,
  } = useForm(DEFAULT_SIGN_UP_FORM);
  const { accountId } = values;
  const [codeIssuanceStatus, setCodeIssuanceStatus] =
    useState<CodeIssuanceType>('NOT_ISSUED');

  const sendEmailVerifyCode = async () => {
    if (!values.accountId) return;
    if (errors?.accountId) return alert(ERROR_MESSAGE.SIGN_UP.EMAIL);
    setCodeIssuanceStatus('IN_PROGRESS');
    const result = await emailsAPI.verifyEmail(values.accountId);

    result.ok
      ? setCodeIssuanceStatus('COMPLETE')
      : setCodeIssuanceStatus('NOT_ISSUED');
  };

  const signUpValidate = useCallback(
    (values: UserFormType) => {
      const { accountId, accountPw, phoneNumber, accountPwCheck } = values;
      const errors =
        signUpType === 'COMMON'
          ? { ...DEFAULT_SIGN_UP_FORM }
          : { ...DEFAULT_SOCIAL_SIGN_UP_FORM };

      if (signUpType === 'COMMON') {
        const isValidPassword = accountPw && validatePassword(accountPw);
        const isValidPasswordCheck =
          accountPw &&
          accountPwCheck &&
          validatePasswordCheck(accountPw, accountPwCheck);

        if (!isValidPassword) errors.accountPw = ERROR_MESSAGE.SIGN_UP.PASSWORD;
        if (!isValidPasswordCheck)
          errors.accountPwCheck = ERROR_MESSAGE.SIGN_UP.PASSWORDCHECK;
      }

      const isValidEmail = accountId && validateEmail(accountId);
      const isValidPhoneNumber =
        phoneNumber && validatePhoneNumber(phoneNumber);

      if (!isValidEmail) errors.accountId = ERROR_MESSAGE.SIGN_UP.EMAIL;
      if (!isValidPhoneNumber) errors.phoneNumber = ERROR_MESSAGE.SIGN_UP.TEL;

      return errors;
    },
    [signUpType]
  );

  const onValid = async () => {
    const token = getCookie('token');
    const signUpResult =
      signUpType === 'SOCIAL'
        ? await registerAPI.socialSignUp(token, values)
        : await usersAPI.signUp(values);

    if (signUpResult) {
      doSignIn(signUpResult.accessToken);
      sessionStorage.setItem('pathFrom', 'sign-up');

      return location.replace(PAGE_LIST.PROFILE_SETTING);
    }

    setCodeIssuanceStatus('NOT_ISSUED');
    if (token) removeCookie('token');
  };

  useEffect(() => {
    const newErrors = signUpValidate(values);
    setErrors(newErrors);
  }, [signUpType, values, setErrors, signUpValidate]);

  useEffect(() => {
    if (signUpType === 'SOCIAL' || accountId === '') return;

    setCodeIssuanceStatus('NOT_ISSUED');
    setValue('verifyCode', '');
  }, [signUpType, accountId, setValue]);

  useEffect(() => {
    const email = getCookie('email');
    const isSocialSignUp = email ? true : false;

    if (isSocialSignUp) {
      const provider = getCookie('provider');
      const birthDate = getCookie('birthDate') || '';
      const gender = getCookie('gender') || '';
      const phoneNumber = getCookie('phoneNumber') || '';

      initializeForm({
        ...DEFAULT_SOCIAL_SIGN_UP_FORM,
        accountId: email,
        provider,
        phoneNumber,
        birthDate,
        gender,
      });
      setSignUpType('SOCIAL');

      removeCookie('email');
      removeCookie('provider');
      if (birthDate) removeCookie('birthDate');
      if (gender) removeCookie('gender');
      if (phoneNumber) removeCookie('phoneNumber');
    }
  }, [initializeForm]);

  const props = {
    values,
    errors,
    disabled: !isSubmitable,
    isSocialSignUp: signUpType === 'SOCIAL',
    isCodeIssuable: codeIssuanceStatus === 'NOT_ISSUED',
    isCodeIssued: codeIssuanceStatus === 'COMPLETE',
    onValid,
    handleChange,
    handleSubmit,
    sendEmailVerifyCode,
  };

  return <SignUpFormView {...props} />;
};

interface SignUpFormViewProps {
  values: UserFormType;
  errors?: ErrorType;
  disabled: boolean;
  isSocialSignUp: boolean;
  isCodeIssuable: boolean;
  isCodeIssued: boolean;
  onValid: () => void;
  sendEmailVerifyCode: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, fn: () => void) => void;
}

const SignUpFormView = ({
  values,
  errors,
  disabled,
  isSocialSignUp,
  isCodeIssuable,
  isCodeIssued,
  sendEmailVerifyCode,
  handleChange,
  ...rest
}: SignUpFormViewProps) => (
  <Card>
    <S.FormWrap>
      <Form title="Sign Up" {...rest}>
        <S.FormContent>
          <S.FormItem>
            <S.InputLabel>아이디</S.InputLabel>
            <S.EmailBox>
              <Input
                name={SIGN_UP_FORM_NAMES.ACCOUND_ID}
                placeholder="이메일"
                value={values.accountId}
                disabled={isSocialSignUp}
                handleChange={handleChange}
              />
              {!isSocialSignUp && (
                <S.VerifyButtonWrap>
                  <Button
                    disabled={!isCodeIssuable}
                    color="black"
                    handleClick={sendEmailVerifyCode}
                  >
                    인증번호 받기
                  </Button>
                </S.VerifyButtonWrap>
              )}
            </S.EmailBox>
            {isCodeIssued && (
              <Input
                name={SIGN_UP_FORM_NAMES.VERIFY_CODE}
                placeholder="인증번호 입력"
                handleChange={handleChange}
              />
            )}
            {values?.accountId && <S.WarnText>{errors?.accountId}</S.WarnText>}
          </S.FormItem>
          <S.FormItem>
            <S.InputLabel>휴대폰 번호</S.InputLabel>
            <Input
              name={SIGN_UP_FORM_NAMES.PHONE_NUMBER}
              placeholder="숫자만 입력 ('-' 제외)"
              value={values.phoneNumber}
              handleChange={handleChange}
            />
            {values?.phoneNumber && (
              <S.WarnText>{errors?.phoneNumber}</S.WarnText>
            )}
          </S.FormItem>
          {!isSocialSignUp && (
            <S.FormItem>
              <S.InputLabel>비밀번호</S.InputLabel>
              <Input
                name={SIGN_UP_FORM_NAMES.ACCOUNT_PW}
                type="password"
                placeholder="영문, 숫자, 특수문자 조합 6자리 이상"
                handleChange={handleChange}
              />
              {values?.accountPw && (
                <S.WarnText>{errors?.accountPw}</S.WarnText>
              )}
              <Input
                name={SIGN_UP_FORM_NAMES.ACCOUNT_PW_CHECK}
                type="password"
                placeholder="비밀번호 재입력"
                handleChange={handleChange}
              />
              {values?.accountPwCheck && (
                <S.WarnText>{errors?.accountPwCheck}</S.WarnText>
              )}
            </S.FormItem>
          )}
          <S.DivideBox>
            <S.FormItem>
              <S.InputLabel>생년월일</S.InputLabel>
              <S.DateInput
                name={SIGN_UP_FORM_NAMES.BIRTHDATE}
                type="date"
                value={values.birthDate}
                onChange={handleChange}
              />
            </S.FormItem>
            <S.FormItem>
              <S.InputLabel>성별</S.InputLabel>
              <S.ButtonBox>
                <Button
                  name={SIGN_UP_FORM_NAMES.GENDER}
                  value={GENDER.MALE}
                  isActive={values.gender === GENDER.MALE}
                  handleClick={handleChange}
                >
                  {GENDER.MALE}
                </Button>
                <Button
                  name={SIGN_UP_FORM_NAMES.GENDER}
                  value={GENDER.FEMALE}
                  isActive={values.gender === GENDER.FEMALE}
                  handleClick={handleChange}
                >
                  {GENDER.FEMALE}
                </Button>
              </S.ButtonBox>
            </S.FormItem>
          </S.DivideBox>
        </S.FormContent>
        <S.Notice>
          입력하신 개인정보는 리뷰추천 성능 향상 목적 외에 사용되지 않습니다.
        </S.Notice>
        <Button type="submit" large color="primary" disabled={disabled}>
          입력 완료
        </Button>
      </Form>
    </S.FormWrap>
  </Card>
);

export default SignUpForm;

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
    color: ${theme.colors.red_0};
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
    background: ${theme.colors.black};
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
