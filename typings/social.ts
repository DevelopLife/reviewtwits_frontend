export type SocialProfile = {
  userId: number;
  nickname: string;
  accountId: string;
  introduceText: string;
  detailIntroduce: string;
  profileImageUrl: string | null;
  reviewCount: number;
  followers: number;
  followings: number;
};

export type SocialReview = {
  reviewId: number;
  userInfo: SocialProfile;
  reviewImageUrlList: string[];
  commentCount: number;
  reactionCount: number;
};
