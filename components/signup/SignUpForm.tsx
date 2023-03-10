import { ChangeEvent, FormEvent, MouseEvent, useEffect } from 'react';

import useForm from 'hooks/useForm';
import {
  DEFAULT_SIGN_UP_FORM,
  GENDER,
  SIGN_UP_FORM_NAMES,
} from 'constants/account';
import { UserFormType } from 'typings/account';
import { signUpValidate } from 'utils/validate';
import * as S from './SignUpForm.styles';

const SignUpForm = () => {
  const {
    values,
    errors,
    isSubmitable,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm({ ...DEFAULT_SIGN_UP_FORM });

  const doSignUp = () => {
    console.log('success');
    // sign up code
  };

  useEffect(() => {
    const newErrors = signUpValidate(values);
    setErrors(newErrors);
  }, [values, setErrors]);

  const props = {
    values,
    errors,
    disabled: !isSubmitable,
    onValid: doSignUp,
    handleChange,
    handleSubmit,
  };

  return <SignUpFormView {...props} />;
};

interface SignUpFormViewProps {
  values: UserFormType;
  errors?: UserFormType;
  disabled: boolean;
  onValid: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, fn: () => void) => void;
}

const SignUpFormView = ({
  values,
  errors,
  disabled,
  handleChange,
  ...rest
}: SignUpFormViewProps) => (
  <S.Form title="Sign Up" {...rest}>
    <S.FormContent>
      <S.FormItem>
        <S.InputLabel>아이디</S.InputLabel>
        <S.Input
          name={SIGN_UP_FORM_NAMES.ACCOUND_ID}
          placeholder="이메일"
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
        {values?.phoneNumber && <S.WarnText>{errors?.phoneNumber}</S.WarnText>}
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
            name={SIGN_UP_FORM_NAMES.BIRTHDAY}
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
      로그인 페이지로 이동
    </S.Button>
  </S.Form>
);

export default SignUpForm;
