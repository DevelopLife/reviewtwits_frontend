import React from 'react';
import Comment from './Comment';
import styled from '@emotion/styled';
import { CommentResponseType } from 'typings/reviews';

interface CommentsProps {
  commentsData: CommentResponseType[] | [];
}

const Comments = ({ commentsData }: CommentsProps) => {
  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      {commentsData.length == 0 ? (
        <h1>댓글이 없어요😭💦</h1>
      ) : (
        <Comment commentsData={commentsData} />
      )}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-top: 16px;
    width: 564px;
    height: 338px;
    margin-bottom: 16px;

    /* overflow-y: scroll; */
  `,
  Title: styled.h4`
    margin-bottom: 8px;
  `,
};

export default Comments;
