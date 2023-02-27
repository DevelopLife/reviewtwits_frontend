import { UserFormType } from 'typings/account';
import { ERROR_MESSAGE } from 'constants/account';

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
  const { email, tel, password, passwordCheck } = values;
  const errors = {
    email: '',
    tel: '',
    password: '',
    passwordCheck: '',
    birthDate: '',
    gender: '',
  };

  if (!isEmailValid(email)) errors.email = ERROR_MESSAGE.SIGN_UP.EMAIL;
  if (tel && !isTelValid(tel)) errors.tel = ERROR_MESSAGE.SIGN_UP.TEL;
  if (!isPasswordValid(password))
    errors.password = ERROR_MESSAGE.SIGN_UP.PASSWORD;
  if (passwordCheck && !isPasswordCheckValid(password, passwordCheck))
    errors.passwordCheck = ERROR_MESSAGE.SIGN_UP.PASSWORDCHECK;

  return errors;
}

export function signInValidate(values: UserFormType) {
  const { email, password } = values;

  const errors = { email: '', password: '' };

  if (!isEmailValid(email)) errors.email = ERROR_MESSAGE.SIGN_IN;
  if (!isPasswordValid(password)) errors.password = ERROR_MESSAGE.SIGN_IN;

  return errors;
}
