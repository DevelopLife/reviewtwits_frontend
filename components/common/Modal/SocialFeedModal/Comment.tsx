import styled from '@emotion/styled';
import { usePostlikeToComment } from 'hooks/queries/sns';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CommentResponseType } from 'typings/reviews';
import { formattedProfileImageUrl } from 'utils/format';

import HeartFull from 'public/icons/like-heart-full.svg';
import HeartEmpty from 'public/icons/like-heart-empty.svg';
import { snsAPI } from 'api/sns';
import { useState } from 'react';
import { formattedLastTime } from 'utils/format';

interface CommentProps {
  commentData: CommentResponseType;
}

const Comment = ({ commentData }: CommentProps) => {
  const router = useRouter();

  const {
    commentId,
    userInfo,
    content,
    parentCommentId,
    commentLikeCount,
    createdDate,
    isCommentLiked,
  } = commentData;
  const { nickname, reviewId } = router.query;

  const [likedComment, setLikedComment] = useState<boolean>(isCommentLiked);

  const onClickLikeButton = () => {
    likedComment ? setUnlike(commentId) : setLike(commentId);
    setLikedComment((prev) => !prev);
  };

  const setUnlike = (commentId: number) => {
    snsAPI.deleteLikeToComment(commentId);
  };
  const setLike = (commentId: number) => {
    snsAPI.postLikeToComment(commentId);
  };

  return (
    <S.Container>
      <div key={commentId}>
        <S.User>
          <S.UserImage
            src={formattedProfileImageUrl(userInfo.profileImageUrl)}
            alt=""
            width={40}
            height={40}
          />
          <S.UserName>{userInfo.nickname}</S.UserName>

          <S.LikeButton onClick={onClickLikeButton}>
            {likedComment ? <HeartFull /> : <HeartEmpty />}
          </S.LikeButton>
          <button>수정</button>
          <button>삭제</button>
        </S.User>
        <S.ContentBox>
          <S.Content>{content}</S.Content>
          <S.ContentInfo>
            <S.LastTime>{formattedLastTime(createdDate)}</S.LastTime>
            <S.LikeCount>{commentLikeCount}likes</S.LikeCount>
          </S.ContentInfo>
        </S.ContentBox>
      </div>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 500px;
  `,
  User: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `,
  UserImage: styled(Image)`
    width: 40px;
    height: 40px;

    background: gray;
    border-radius: 50%;
  `,
  UserName: styled.p`
    font-family: ' Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  `,
  LikeButton: styled.button`
    width: 20px;
    height: 20px;
  `,
  ContentBox: styled.div`
    display: flex;
  `,
  Content: styled.p`
    font-family: ' Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding-right: 12px;

    color: ${({ theme }) => theme.colors.black};
  `,
  ContentInfo: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
  `,
  LastTime: styled.p``,
  LikeCount: styled.p``,
};

export default Comment;
