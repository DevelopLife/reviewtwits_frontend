const regExp = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{6,}$/,
};

export const validateEmail = (email: string) => regExp.email.test(email);
export const validatePhoneNumber = (tel: string) => !isNaN(Number(tel));
export const validatePassword = (password: string) =>
  regExp.password.test(password);
export const validatePasswordCheck = (
  password: string,
  passwordCheck: string
) => password === passwordCheck;
