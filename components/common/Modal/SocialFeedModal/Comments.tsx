import React from 'react';
import Comment from './Comment';
import styled from '@emotion/styled';

const Comments = () => {
  return (
    <S.Container>
      <S.Title>댓글</S.Title>
      <Comment />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-top: 16px;
    width: 564px;
    height: 111px;

    /* overflow-y: scroll; */
  `,
  Title: styled.h4`
    margin-bottom: 8px;
  `,
};

export default Comments;
