export interface ReviewType {
  productURL: string;
  content: string;
  score: number;
  imageFiles?: File[];
}

export interface ReviewResponseType {
  reviewId: number;
  projectId: number;
  productUrl: string;
  starScore: number;
  score: number;
  content: string;
  reviewImageNameList: string[];
}
