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
  lastModifiedDate: number[];
  reviewId: number;
  projectId: number;
  productName?: string;
  productUrl: string;
  starScore: number;
  score: number;
  content: string;
  reviewImageNameList: string[];
  userInfo: UserProfileResponseType;
  commentCount?: number;
  reactionResponses?: ReactionResponseType;
  isScrapped: boolean;
}
