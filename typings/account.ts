export interface UserFormType {
  accountId: string;
  accountPw: string;
  phoneNumber?: string;
  birthDate?: string | '';
  gender?: Gender | '';
  accountPwCheck?: string;
  verifyCode?: string;
}

export type CodeIssuanceType = 'NOT_ISSUED' | 'IN_PROGRESS' | 'COMPLETE';

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

export interface UserProfileFormType {
  nickname?: string;
  intro?: string;
  userImg?: File;
}

export interface UserProfileResponseType {
  accountId: string;
  nickname?: string;
  introductText?: string;
  profileImage?: string;
}

export type Gender = '남자' | '여자';
