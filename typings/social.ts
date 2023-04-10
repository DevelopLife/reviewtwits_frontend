export type SocialProfile = {
  userId: number;
  nickname: string;
  accountId: string;
  introduceText: string;
  profileImage: string | null;
  reviewCount: number;
  followers: number;
  followings: number;
};

export type SocialReview = {
  reviewId: number;
  userInfo: SocialProfile;
  reviewImageNameList: string[];
  commentCount: number;
  reactionCount: number;
};
