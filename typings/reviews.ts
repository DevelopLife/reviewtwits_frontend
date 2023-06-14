import { UserProfileResponseType } from './account';

export type ReactionType =
  | 'LOVE'
  | 'SUNGLASSES'
  | 'LAUGHING'
  | 'SURPRISING'
  | 'THINKING'
  | 'PLEADING'
  | 'SHOCKING'
  | 'PRAYING'
  | 'GOOD'
  | 'NOTICING';

export interface ReactionResponseType {
  [reaction: string]: {
    isReacted: boolean;
    count: number;
  };
}

export interface ReviewType {
  productURL: string;
  productName?: string;
  content: string;
  score: number;
  newImageFiles?: File[];
  deleteImageList?: string[];
}

export interface ReviewResponseType {
  createdDate: number[];
  lastModifiedDate: number[];
  reviewId: number;
  projectId: number;
  productName?: string;
  productUrl: string;
  starScore: number;
  score: number;
  content: string;
  reviewImageUrlList: string[];
  userInfo: UserProfileResponseType;
  commentCount?: number;
  reactionResponses?: ReactionResponseType;
  isScrapped: boolean;
}

export interface ProductType {
  itemId: number;
  productName: string;
  productImageUrl: string;
  score: number;
  url: string;
}

export interface ShoppingMallUserInfo {
  userId: number;
  nickname: string;
  accountId: string;
  introduceText: string;
  profileImageUrl: null;
  detailIntroduce: null;
  reviewCount: number;
  followers: number;
  followings: number;
}

export interface ShoppingMallReviewInfo {
  averageStarScore: number;
  totalReviewCount: number;
  recentReviewCount: number;
  starScoreArray: number[];
}

export interface ShoppingMallReviewDetail {
  createdDate: [number, number, number];
  lastModifiedDate: number[];
  reviewId: number;
  userInfo: ShoppingMallUserInfo;
  projectId: number;
  content: string;
  productUrl: string;
  productName: null;
  score: number;
  reviewImageUrlList: string[];
  exist: boolean;
  reactionCount: number;
  isLiked: boolean;
}

export interface CommentResponseType {
  commentId: number;
  userInfo: ShoppingMallUserInfo;
  content: string;
  parentCommentId: number;
  commentLikeCount: number;
  createdDate: number[];
  isCommentLiked: boolean;
}
