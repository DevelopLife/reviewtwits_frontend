import { ChangeEvent, FormEvent, MouseEvent, useEffect } from 'react';

import useForm, { ErrorType } from 'hooks/useForm';
import { usersAPI } from 'api/users';
import { emailsAPI } from 'api/emails';
import { UserFormType } from 'typings/account';
import {
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  validatePhoneNumber,
} from 'utils/validate';
import {
  DEFAULT_SIGN_UP_FORM,
  ERROR_MESSAGE,
  GENDER,
  SIGN_UP_FORM_NAMES,
} from 'constants/account';

import * as S from './SignUpForm.styles';
import { doSignIn } from 'utils/auth';

const SignUpForm = () => {
  const {
    values,
    errors,
    isSubmitable,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm({ ...DEFAULT_SIGN_UP_FORM });

  const sendEmailVerifyCode = () => {
    if (errors?.accountId) return alert(ERROR_MESSAGE.SIGN_UP.EMAIL);
    emailsAPI.verifyEmail(values.accountId);
  };

  const signUpValidate = (values: UserFormType) => {
    const { accountId, accountPw, phoneNumber, accountPwCheck } = values;
    const errors = { ...DEFAULT_SIGN_UP_FORM };

    const isValidEmail = validateEmail(accountId);
    const isValidPhoneNumber = phoneNumber && validatePhoneNumber(phoneNumber);
    const isValidPassword = validatePassword(accountPw);
    const isValidPasswordCheck =
      accountPwCheck && validatePasswordCheck(accountPw, accountPwCheck);

    if (!isValidEmail) errors.accountId = ERROR_MESSAGE.SIGN_UP.EMAIL;
    if (!isValidPhoneNumber) errors.phoneNumber = ERROR_MESSAGE.SIGN_UP.TEL;
    if (!isValidPassword) errors.accountPw = ERROR_MESSAGE.SIGN_UP.PASSWORD;
    if (!isValidPasswordCheck)
      errors.accountPwCheck = ERROR_MESSAGE.SIGN_UP.PASSWORDCHECK;

    return errors;
  };

  const onValid = async () => {
    const signUpResult = await usersAPI.signUp(values);

    if (signUpResult) {
      doSignIn(signUpResult.accessToken);
      window.location.replace('/');
    }
  };

  useEffect(() => {
    const newErrors = signUpValidate(values);
    setErrors(newErrors);
  }, [values, setErrors]);

  const props = {
    values,
    errors,
    disabled: !isSubmitable,
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
  sendEmailVerifyCode,
  handleChange,
  ...rest
}: SignUpFormViewProps) => (
  <S.Card>
    <S.FormWrap>
      <S.Form title="Sign Up" {...rest}>
        <S.FormContent>
          <S.FormItem>
            <S.InputLabel>아이디</S.InputLabel>
            <S.EmailBox>
              <S.Input
                name={SIGN_UP_FORM_NAMES.ACCOUND_ID}
                placeholder="이메일"
                handleChange={handleChange}
              />
              <S.VerifyButtonWrap>
                <S.Button color="black" handleClick={sendEmailVerifyCode}>
                  인증번호 받기
                </S.Button>
              </S.VerifyButtonWrap>
            </S.EmailBox>

            <S.Input
              name={SIGN_UP_FORM_NAMES.VERIFY_CODE}
              placeholder="인증번호 입력"
              handleChange={handleChange}
            />
            {values?.accountId && <S.WarnText>{errors?.accountId}</S.WarnText>}
            {/* <S.EmailInputBox>
          <S.Input placeholder="이메일" />
          <S.At>@</S.At>
          <S.Select>
            <S.Option>선택</S.Option>
          </S.Select>
        </S.EmailInputBox> */}
          </S.FormItem>
          <S.FormItem>
            <S.InputLabel>휴대폰 번호</S.InputLabel>
            <S.Input
              name={SIGN_UP_FORM_NAMES.PHONE_NUMBER}
              placeholder="숫자만 입력 ('-' 제외)"
              handleChange={handleChange}
            />
            {values?.phoneNumber && (
              <S.WarnText>{errors?.phoneNumber}</S.WarnText>
            )}
          </S.FormItem>
          <S.FormItem>
            <S.InputLabel>비밀번호</S.InputLabel>
            <S.Input
              name={SIGN_UP_FORM_NAMES.ACCOUNT_PW}
              type="password"
              placeholder="영문, 숫자, 특수문자 조합 6자리 이상"
              handleChange={handleChange}
            />
            {values?.accountPw && <S.WarnText>{errors?.accountPw}</S.WarnText>}
            <S.Input
              name={SIGN_UP_FORM_NAMES.ACCOUNT_PW_CHECK}
              type="password"
              placeholder="비밀번호 재입력"
              handleChange={handleChange}
            />
            {values?.accountPwCheck && (
              <S.WarnText>{errors?.accountPwCheck}</S.WarnText>
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
            <S.FormItem>
              <S.InputLabel>성별</S.InputLabel>
              <S.ButtonBox>
                <S.Button
                  name={SIGN_UP_FORM_NAMES.GENDER}
                  value={GENDER.MALE}
                  isActive={values.gender === GENDER.MALE}
                  handleClick={handleChange}
                >
                  {GENDER.MALE}
                </S.Button>
                <S.Button
                  name={SIGN_UP_FORM_NAMES.GENDER}
                  value={GENDER.FEMALE}
                  isActive={values.gender === GENDER.FEMALE}
                  handleClick={handleChange}
                >
                  {GENDER.FEMALE}
                </S.Button>
              </S.ButtonBox>
            </S.FormItem>
          </S.DivideBox>
        </S.FormContent>
        <S.Notice>
          입력하신 개인정보는 리뷰추천 성능 향상 목적 외에 사용되지 않습니다.
        </S.Notice>
        <S.Button type="submit" large color="primary" disabled={disabled}>
          입력 완료
        </S.Button>
      </S.Form>
    </S.FormWrap>
  </S.Card>
);

export default SignUpForm;
