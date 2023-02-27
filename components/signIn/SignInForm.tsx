import { ChangeEvent, FormEvent, MouseEvent, useEffect } from 'react';

import * as S from './SignInForm.styles';
import useForm from 'hooks/useForm';
import SocialLoginBox from './SocialLoginBox';
import { signInValidate } from 'utils/validate';

const SignInForm = () => {
  const {
    values,
    errors,
    isSubmitable: isValid,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm({
    email: '',
    password: '',
  });

  const doSignIn = () => {
    if (!isValid) return alert(errors?.email || errors?.password);

    // sign in code
    console.log('success');
  };

  useEffect(() => {
    const newErrors = signInValidate(values);
    setErrors(newErrors);
  }, [values, setErrors]);

  const props = {
    onValid: doSignIn,
    handleChange,
    handleSubmit,
  };

  return <SignInFormView {...props} />;
};

interface SignInFormViewProps {
  onValid: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, fn: () => void) => void;
}

const SignInFormView = ({ handleChange, ...rest }: SignInFormViewProps) => (
  <S.Form title="Login" {...rest}>
    <S.FormContent>
      <S.Input
        name="email"
        type="email"
        placeholder="이메일"
        handleChange={handleChange}
      />
      <S.Input
        name="password"
        type="password"
        placeholder="비밀번호"
        handleChange={handleChange}
      />
      <S.RememberMeBox>
        <S.CheckBox type="checkbox" />
        <S.RememberMeText>자동 로그인</S.RememberMeText>
      </S.RememberMeBox>

      <S.ButtonBox>
        <S.Button type="submit" large color="primary">
          로그인
        </S.Button>
        <S.Button large color="black">
          이메일로 회원가입
        </S.Button>
      </S.ButtonBox>
    </S.FormContent>
    <S.FindBox>
      <S.FindId>아이디 찾기</S.FindId>
      <S.FindPassword>비밀번호 찾기</S.FindPassword>
    </S.FindBox>
    <SocialLoginBox />
  </S.Form>
);

export default SignInForm;
