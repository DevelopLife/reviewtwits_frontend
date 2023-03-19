import { regExp } from './regExp';

export const validateEmail = (email: string) => regExp.email.test(email);
export const validatePhoneNumber = (tel: string) => !isNaN(Number(tel));
export const validatePassword = (password: string) =>
  regExp.password.test(password);
export const validatePasswordCheck = (
  password: string,
  passwordCheck: string
) => password === passwordCheck;
