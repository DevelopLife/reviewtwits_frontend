import { UserFormType } from 'typings/account';

const SIGN_UP = {
  EMAIL: '이메일 형식에 맞지 않습니다. 다시 입력해주세요.',
  TEL: '전화번호는 숫자만 입력해주세요.',
  PASSWORD:
    '영문자, 숫자, 특수문자가 조합된 6자리 이상의 비밀번호를 입력해주세요.',
  PASSWORDCHECK: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
};

const SIGN_IN =
  '등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.';

export const ERROR_MESSAGE = {
  SIGN_UP,
  SIGN_IN,
};

export const DEFAULT_SIGN_UP_FORM: UserFormType = {
  accountId: '',
  phoneNumber: '',
  accountPw: '',
  accountPwCheck: '',
  birthDate: '',
  gender: '',
  verifyCode: '',
};

export const SIGN_UP_FORM_NAMES = {
  ACCOUND_ID: 'accountId',
  ACCOUNT_PW: 'accountPw',
  ACCOUNT_PW_CHECK: 'accountPwCheck',
  BIRTHDATE: 'birthDate',
  GENDER: 'gender',
  PHONE_NUMBER: 'phoneNumber',
  VERIFY_CODE: 'verifyCode',
};

export const GENDER = {
  MALE: '남자',
  FEMALE: '여자',
};

export type ErrorType = typeof ERROR_MESSAGE;