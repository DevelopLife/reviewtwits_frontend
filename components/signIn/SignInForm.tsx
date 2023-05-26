import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useCallback,
} from 'react';
import { useSetRecoilState } from 'recoil';
import Link from 'next/link';
import styled from '@emotion/styled';

import useForm from 'hooks/useForm';
import { ERROR_MESSAGE, SIGN_UP_FORM_NAMES } from 'constants/account';
import { validateEmail, validatePassword } from 'utils/validate';

import { usersAPI } from 'api/users';
import { doSignIn } from 'utils/auth';
import { isLoginState } from 'states/isLogin';

import Form from 'components/common/Form';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const SignInForm = () => {
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm({
    accountId: '',
    accountPw: '',
  });
  const setIsLogined = useSetRecoilState(isLoginState);

  const onValid = async () => {
    if (!values.accountId || !values.accountPw) return;
    const signInResult = await usersAPI.signIn(values);

    if (signInResult) {
      doSignIn(signInResult.accessToken);
      setIsLogined(true);

      window.location.href = document.referrer;
    }
  };

  const onInvalid = () => {
    alert(errors?.accountId || errors?.accountPw);
  };

  const signInValidate = useCallback(() => {
    const { accountId, accountPw } = values;
    const errors = { accountId: '', accountPw: '' };

    if (!validateEmail(accountId)) errors.accountId = ERROR_MESSAGE.SIGN_IN;
    if (!validatePassword(accountPw)) errors.accountPw = ERROR_MESSAGE.SIGN_IN;

    return errors;
  }, [values]);

  useEffect(() => {
    const newErrors = signInValidate();
    setErrors(newErrors);
  }, [values, setErrors, signInValidate]);

  const props = {
    onValid,
    onInvalid,
    handleChange,
    handleSubmit,
  };

  return <SignInFormView {...props} />;
};

interface SignInFormViewProps {
  onValid: () => void;
  onInvalid: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, fn: () => void) => void;
}

const SignInFormView = ({ handleChange, ...rest }: SignInFormViewProps) => (
  <Form title="Login" {...rest}>
    <S.FormContent>
      <Input
        name={SIGN_UP_FORM_NAMES.ACCOUND_ID}
        type="email"
        placeholder="이메일"
        handleChange={handleChange}
      />
      <Input
        name={SIGN_UP_FORM_NAMES.ACCOUNT_PW}
        type="password"
        placeholder="비밀번호"
        handleChange={handleChange}
      />
      <S.RememberMeBox>
        <S.CheckBox type="checkbox" />
        <S.RememberMeText>자동 로그인</S.RememberMeText>
      </S.RememberMeBox>

      <S.ButtonBox>
        <Button type="submit" large color="primary">
          로그인
        </Button>
        <Link href="/sign-up">
          <Button large color="black">
            이메일로 회원가입
          </Button>
        </Link>
      </S.ButtonBox>
    </S.FormContent>
  </Form>
);

export default SignInForm;

const S = {
  FormContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 387px;
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

  ButtonBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  RememberMeBox: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `,

  CheckBox: styled.input`
    width: 20px;
    height: 20px;
  `,

  RememberMeText: styled.label`
    font-size: 16px;
    color: #6d6d6d;
  `,
};
