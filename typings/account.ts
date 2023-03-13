export interface UserFormType {
  accountId: string;
  accountPw: string;
  phoneNumber?: string;
  birthDate?: string | '';
  gender?: Gender | '';
  accountPwCheck?: string;
  verifyCode?: string;
}

export interface SignUpParams {
  accountId: string;
  accountPw: string;
  phoneNumber?: string;
  birthDate?: string | '';
  gender?: Gender | '';
  nickname?: string;
  verifyCode?: string;
}

export interface SighInParams {
  email: string;
  password: string;
}

export type Gender = '남성' | '여성';
