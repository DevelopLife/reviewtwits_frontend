import { ChangeEvent, FormEvent, MouseEvent, useEffect } from 'react';

import * as S from './SignUpForm.styles';
import useForm from 'hooks/useForm';
import type { UserFormType } from 'typings/account';
import { signUpValidate } from 'utils/validate';

const SignUpForm = () => {
  const {
    values,
    errors,
    isSubmitable,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm({
    email: '',
    tel: '',
    password: '',
    passwordCheck: '',
    birthDate: '',
    gender: '',
  });

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
          name="email"
          placeholder="이메일"
          handleChange={handleChange}
        />
        {values?.email && <S.WarnText>{errors?.email}</S.WarnText>}
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
          name="tel"
          placeholder="숫자만 입력 ('-' 제외)"
          handleChange={handleChange}
        />
        {values?.tel && <S.WarnText>{errors?.tel}</S.WarnText>}
      </S.FormItem>
      <S.FormItem>
        <S.InputLabel>비밀번호</S.InputLabel>
        <S.Input
          name="password"
          type="password"
          placeholder="영문, 숫자, 특수문자 조합 6자리 이상"
          handleChange={handleChange}
        />
        {values?.password && <S.WarnText>{errors?.password}</S.WarnText>}
        <S.Input
          name="passwordCheck"
          type="password"
          placeholder="비밀번호 재입력"
          handleChange={handleChange}
        />
        {values?.passwordCheck && (
          <S.WarnText>{errors?.passwordCheck}</S.WarnText>
        )}
      </S.FormItem>
      <S.DivideBox>
        <S.FormItem>
          <S.InputLabel>생년월일</S.InputLabel>
          <S.DateInput name="birthDate" type="date" onChange={handleChange} />
        </S.FormItem>
        <S.FormItem>
          <S.InputLabel>성별</S.InputLabel>
          <S.ButtonBox>
            <S.Button
              name="gender"
              value="남성"
              isActive={values.gender === '남성'}
              handleClick={handleChange}
            >
              남성
            </S.Button>
            <S.Button
              name="gender"
              value="여성"
              isActive={values.gender === '여성'}
              handleClick={handleChange}
            >
              여성
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
