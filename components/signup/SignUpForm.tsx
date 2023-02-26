import * as S from './SignUpForm.styles';

const SignUpForm = () => {
  return <SignUpFormView />;
};

// interface SignUpFormProps {}

const SignUpFormView = () => (
  <S.Form title="Sign Up">
    <S.FormContent>
      <S.FormItem>
        <S.InputLabel>아이디</S.InputLabel>
        <S.TextInput placeholder="이메일" />
        {/* <S.EmailInputBox>
          <S.TextInput placeholder="이메일" />
          <S.At>@</S.At>
          <S.Select>
            <S.Option>선택</S.Option>
          </S.Select>
        </S.EmailInputBox> */}
      </S.FormItem>
      <S.FormItem>
        <S.InputLabel>휴대폰 번호</S.InputLabel>
        <S.TextInput placeholder="번호 입력" />
      </S.FormItem>
      <S.FormItem>
        <S.InputLabel>비밀번호</S.InputLabel>
        <S.TextInput placeholder="영문, 숫자, 특수문자 조합 6자리 이상" />
        <S.TextInput placeholder="비밀번호 재입력" />
      </S.FormItem>
      <S.DivideBox>
        <S.FormItem>
          <S.InputLabel>생년월일</S.InputLabel>
          <S.DateInput type="date" />
        </S.FormItem>
        <S.FormItem>
          <S.InputLabel>성별</S.InputLabel>
          <S.ButtonBox>
            <S.Button>남성</S.Button>
            <S.Button>여성</S.Button>
          </S.ButtonBox>
        </S.FormItem>
      </S.DivideBox>
    </S.FormContent>
    <S.Notice>
      입력하신 개인정보는 리뷰추천 성능 향상 목적 외에 사용되지 않습니다.
    </S.Notice>
    <S.Button large color="primary">
      로그인 페이지로 이동
    </S.Button>
  </S.Form>
);

export default SignUpForm;
