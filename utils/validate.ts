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

  if (!isEmailValid(email)) errors.email = ERROR_MESSAGE.email;
  if (tel && !isTelValid(tel)) errors.tel = ERROR_MESSAGE.tel;
  if (!isPasswordValid(password)) errors.password = ERROR_MESSAGE.password;
  if (passwordCheck && !isPasswordCheckValid(password, passwordCheck))
    errors.passwordCheck = ERROR_MESSAGE.passwordCheck;

  return errors;
}
