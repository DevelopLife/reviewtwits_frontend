export interface ReviewType {
  productURL: string;
  productName?: string;
  content: string;
  score: number;
  newImageFiles?: File[];
  deleteImageList?: string[];
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
