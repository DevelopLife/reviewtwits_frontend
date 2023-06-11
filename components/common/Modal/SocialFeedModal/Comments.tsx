import React, { useEffect, useRef } from 'react';
import Comment from './Comment';
import styled from '@emotion/styled';
import { CommentResponseType } from 'typings/reviews';

interface CommentsProps {
  commentsData: CommentResponseType[] | [];
}

const Comments = ({ commentsData }: CommentsProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [commentsData]);

  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      <div ref={scrollRef}>
        {commentsData.length == 0 ? (
          <h1>댓글이 없어요😭💦</h1>
        ) : (
          commentsData.map((commentData) => (
            <Comment key={commentData.commentId} commentData={commentData} />
          ))
        )}
      </div>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-top: 16px;
    width: 564px;
    height: 338px;
    margin-bottom: 16px;

    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Title: styled.h4`
    margin-bottom: 8px;
  `,
};

export default Comments;
