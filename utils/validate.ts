import { regExp } from '../constants/regExp';

export const validateEmail = (email: string) => regExp.email.test(email);
export const validatePhoneNumber = (tel: string) => !isNaN(Number(tel));
export const validatePassword = (password: string) =>
  regExp.password.test(password);
export const validatePasswordCheck = (
  password: string,
  passwordCheck: string
) => password === passwordCheck;

export const validateReviewScore = (score: number) => score > 0 && score <= 5;
export const validateReviewContent = (content: string) => content?.length >= 10;
export const validateURL = (url: string) => regExp.url.test(url);

export const validateMobile = (agent: string) => regExp.mobile.test(agent);
