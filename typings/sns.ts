export interface FollowType {
  userId: number;
  nickname: string;
  accountId: string;
  introduceText: string;
  profileImageUrl: null | string;
  detailIntroduce: string;
  reviewCount: number;
  followers: number;
  followings: number;
}
export type FollowListType = FollowType[];

export type ExceptNicknameInFollowType = Omit<FollowType, 'nickname'>;
export type FollowingDictionary = { [key: string]: ExceptNicknameInFollowType };

export interface GetFollowerListParams {
  nickname: string;
  size: number;
  followId: number;
}
