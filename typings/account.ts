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
  accountId: string;
  accountPw: string;
}

export type Gender = '남자' | '여자';
