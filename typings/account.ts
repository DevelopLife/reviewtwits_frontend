export type SignUpType = 'COMMON' | 'SOCIAL';

export type SocialProviderType = 'GOOGLE' | 'KAKAO' | 'NAVER';

export interface UserFormType {
  accountId?: string;
  accountPw?: string;
  phoneNumber?: string;
  birthDate?: string | '';
  gender?: Gender | '';
  accountPwCheck?: string;
  verifyCode?: string;
  provider?: SocialProviderType | '';
}

export type CodeIssuanceType = 'NOT_ISSUED' | 'IN_PROGRESS' | 'COMPLETE';

export interface SignUpParams {
  accountId?: string;
  accountPw?: string;
  phoneNumber?: string;
  birthDate?: string | '';
  gender?: Gender | '';
  nickname?: string;
  verifyCode?: string;
}

export interface SighInParams {
  accountId?: string;
  accountPw?: string;
}

export interface UserProfileFormType {
  nickname?: string;
  intro?: string;
  userImg?: File;
}

export interface UserProfileResponseType {
  accountId: string;
  birthDate: string;
  gender: string;
  introduceText?: string;
  nickname?: string;
  phoneNumber: string;
  profileImageUrl?: string;
}

export type Gender = '남자' | '여자';
