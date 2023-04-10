export interface ResponseErrorDto {
  errorType: 'FollowAlreadyExistsException';
  fieldName: 'targetUserAccountId';
  message: '이미 수행된 팔로우 요청입니다';
}

export type ResponseError = ResponseErrorDto[];
