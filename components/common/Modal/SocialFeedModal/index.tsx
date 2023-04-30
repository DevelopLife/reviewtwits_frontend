/* eslint-disable react-hooks/rules-of-hooks */
import DetailImage from './DetailImage';
import Comments from './Comments';
import styled from '@emotion/styled';
import Contants from './Contants';
import Reviewer from './Reviewer';
import Reactions from './Reactions';
import AddCommentForm from './AddCommentForm';
import { useGetOneReview, useGetReviewComments } from 'hooks/queries/sns';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';

const SocialFeedModal = () => {
  const router = useRouter();

  const { nickname, reviewId } = router.query;

  if (!nickname || !reviewId) {
    return <h1>로딩중...</h1>;
  }

  const { data: reviewData } = useGetOneReview(
    nickname as string,
    Number(reviewId) as number
  );

  const { data: commentsData } = useGetReviewComments(
    Number(reviewId) as number
  );

  if (!reviewData || !commentsData) {
    return <h1>로딩중...</h1>;
  }

  return (
    <S.FeedDetailContainer>
      <DetailImage reviewImageUrlList={reviewData.reviewImageUrlList} />

      <S.DetailDesc>
        <Reviewer
          {...reviewData.userInfo}
          lastModifiedDate={reviewData.lastModifiedDate}
          starScore={reviewData.score}
        />
        <Contants content={reviewData.content} />
        <S.Line />
        <Comments commentsData={commentsData} />
        <S.Line />
        <Reactions
          reviewId={reviewId as string}
          isScrapped={reviewData.isScrapped}
          reactions={reviewData.reactionResponses}
        />
        <AddCommentForm />
      </S.DetailDesc>
    </S.FeedDetailContainer>
  );
};

const S = {
  FeedDetailContainer: styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 1488px;
    height: 899px;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.21);
    border-radius: 20px;
  `,

  DetailDesc: styled.div`
    width: 654px;
    margin-top: 92px;
    margin-bottom: 92px;
    padding-left: 60px;
  `,

  Line: styled.div`
    border: 1px solid #e9e9e9;
  `,
};

export default SocialFeedModal;
