export interface FollowType {
  userId: number;
  nickname: string;
  accountId: string;
  introduceText: string;
  profileImage: null | string;
  detailIntroduce: string;
  reviewCount: number;
  followers: number;
  followings: number;
}
export type FollowListType = FollowType[];
