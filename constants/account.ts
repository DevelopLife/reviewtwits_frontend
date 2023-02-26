export const ERROR_MESSAGE = {
  email: '이메일 형식에 맞지 않습니다. 다시 입력해주세요.',
  tel: '전화번호는 숫자만 입력해주세요.',
  password:
    '영문자, 숫자, 특수문자가 조합된 6자리 이상의 비밀번호를 입력해주세요.',
  passwordCheck: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
  // birthDate: '생년월일을 선택해주세요.',
  // gender: '성별을 선택해주세요.',
};

export type ErrorType = typeof ERROR_MESSAGE;
