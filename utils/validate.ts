import { UserFormType } from 'typings/account';
import { DEFAULT_SIGN_UP_FORM, ERROR_MESSAGE } from 'constants/account';

const regExp = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{6,}$/,
};

const isEmailValid = (email: string) => regExp.email.test(email);
const isTelValid = (tel: string) => !isNaN(Number(tel));
const isPasswordValid = (password: string) => regExp.password.test(password);
const isPasswordCheckValid = (password: string, passwordCheck: string) =>
  password === passwordCheck;

export function signUpValidate(values: UserFormType) {
  const { accountId, accountPw, phoneNumber, accountPwCheck } = values;
  const errors = { ...DEFAULT_SIGN_UP_FORM };

  if (!isEmailValid(accountId)) errors.accountId = ERROR_MESSAGE.SIGN_UP.EMAIL;
  if (phoneNumber && !isTelValid(phoneNumber))
    errors.phoneNumber = ERROR_MESSAGE.SIGN_UP.TEL;
  if (!isPasswordValid(accountPw))
    errors.accountPw = ERROR_MESSAGE.SIGN_UP.PASSWORD;
  if (accountPwCheck && !isPasswordCheckValid(accountPw, accountPwCheck))
    errors.accountPwCheck = ERROR_MESSAGE.SIGN_UP.PASSWORDCHECK;

  return errors;
}

export function signInValidate(values: UserFormType) {
  const { accountId, accountPw } = values;

  const errors = { accountId: '', accountPw: '' };

  if (!isEmailValid(accountId)) errors.accountId = ERROR_MESSAGE.SIGN_IN;
  if (!isPasswordValid(accountPw)) errors.accountPw = ERROR_MESSAGE.SIGN_IN;

  return errors;
}
