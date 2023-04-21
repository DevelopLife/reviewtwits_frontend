export interface ProductSearchResultType {
  keyword: string;
  requestId: string;
  travelKeyword: boolean;
}

export interface ProductInfoType {
  name: string;
  price: number;
  productId: number;
  productUrl: string;
  imagePath?: string;
  imageUuid?: string;
}
