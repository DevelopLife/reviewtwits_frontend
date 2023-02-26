import * as S from './SignInForm.styles';
import SocialLoginBox from './SocialLoginBox';

const SignInForm = () => {
  return <SignInFormView />;
};

// interface SignInFormViewProps {}

const SignInFormView = () => (
  <S.Form title="Login">
    <S.FormContent>
      <S.Input name="email" placeholder="이메일" />
      <S.Input name="password" type="password" placeholder="비밀번호" />
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
