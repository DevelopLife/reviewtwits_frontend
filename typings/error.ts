export interface ResponseErrorDto {
  errorType: string;
  fieldName: string;
  message: string;
}

export type ResponseError = ResponseErrorDto[];
