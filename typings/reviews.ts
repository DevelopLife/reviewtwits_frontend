export interface ReviewType {
  productURL: string;
  content: string;
  score: number;
  multipartImageFiles?: FormData;
}
