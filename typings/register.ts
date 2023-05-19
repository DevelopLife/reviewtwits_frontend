export interface RegisterProjectParams {
  projectName: string;
  body: RegisterProductBody;
}

export interface RegisterProductBody {
  productUrl: string;
  imageUrl: string;
  productName: string;
}
