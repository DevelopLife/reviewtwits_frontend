export interface UserFormType {
  accountId: string;
  accountPw: string;
  phoneNumber?: string;
  birthday?: Date | '';
  gender?: Gender | '';
  accountPwCheck?: string;
}

export interface SignUpParams {
  accountId: string;
  accountPw: string;
  phoneNumber?: string;
  birthday?: Date | '';
  gender?: Gender | '';
  nickname?: string;
  authenticationCode?: string;
}

export interface SighInParams {
  email: string;
  password: string;
}

export type Gender = '남자' | '여자';
