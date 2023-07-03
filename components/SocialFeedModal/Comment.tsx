import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CommentResponseType } from 'typings/reviews';
import { formattedProfileImageUrl } from 'utils/format';

import HeartFull from 'public/icons/like-heart-full.svg';
import HeartEmpty from 'public/icons/like-heart-empty.svg';
import { snsAPI } from 'api/sns';
import { useState } from 'react';
import { formattedLastTime } from 'utils/format';
import { useUserProfile } from 'hooks/queries/users';
import useForm from 'hooks/useForm';
import useModal from 'hooks/useModal';
import { PAGE_LIST } from 'constants/routers';

interface CommentProps {
  commentData: CommentResponseType;
}

const Comment = ({ commentData }: CommentProps) => {
  const router = useRouter();
  const modal = useModal();
  const [isHover, setIsHover] = useState(false);

  const {
    commentId,
    userInfo,
    content,
    commentLikeCount,
    createdDate,
    isCommentLiked,
  } = commentData;

  const { values, handleChange, handleSubmit } = useForm({ content });

  const { accountId: loggedUserAccountId } = useUserProfile();

  const [likedComment, setLikedComment] = useState<boolean>(isCommentLiked);
  const [likedCount, setLikedCount] = useState<number>(commentLikeCount);
  const [deletedComment, setDeletedComment] = useState<boolean>(
    commentData ? false : true
  );
  const [isPatching, setIsPatching] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>(content);

  const onClickLikeButton = () => {
    likedComment ? setUnlike(commentId) : setLike(commentId);
    setLikedComment((prev) => !prev);
  };

  const handleMouseEnter = () => setIsHover((prev) => true);
  const handleMouseLeave = () => setIsHover((prev) => false);

  const setUnlike = (commentId: number) => {
    snsAPI.deleteLikeToComment(commentId);
    setLikedCount((prev) => prev - 1);
  };
  const setLike = (commentId: number) => {
    snsAPI.postLikeToComment(commentId);
    setLikedCount((prev) => prev + 1);
  };

  const deleteComment = () => {
    snsAPI.deleteComment(commentId);
    setDeletedComment((prev) => !prev);
  };

  const handleRetouchComment = () => {
    setIsPatching((prev) => !prev);
  };

  const onPatchedContentSubmit = () => {
    snsAPI.patchComment(commentId, values);
    setIsPatching((prev) => !prev);
    setCommentContent((prev) => values.content);
  };

  const onUserClick = () => {
    router.push(`${PAGE_LIST.SOCIAL_PROFILE}/${userInfo.nickname}`);
    modal.hide();
  };
  return (
    <S.Container
      deletedComment={deletedComment}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.UserImage
        src={formattedProfileImageUrl(userInfo.profileImageUrl)}
        alt=""
        width={40}
        height={40}
        onClick={onUserClick}
      />
      <S.CommentBox key={commentId}>
        <S.User>
          <S.UserName onClick={onUserClick}>{userInfo.nickname}</S.UserName>

          <S.LikeButton onClick={onClickLikeButton}>
            {likedComment ? <HeartFull /> : <HeartEmpty />}
          </S.LikeButton>
          {loggedUserAccountId === userInfo.accountId && (
            <S.DealButtonBox isHover={isHover}>
              <button onClick={handleRetouchComment}>수정</button>
              <button onClick={deleteComment}>삭제</button>
            </S.DealButtonBox>
          )}
        </S.User>
        <S.ContentBox>
          {isPatching ? (
            <form
              action="submit"
              onSubmit={(e) => handleSubmit(e, onPatchedContentSubmit)}
            >
              <input
                type="text"
                placeholder={commentContent}
                onChange={handleChange}
                name="content"
              />
              <button>수정 완료</button>
            </form>
          ) : (
            <S.Content>{commentContent}</S.Content>
          )}

          <S.ContentInfo>
            <S.LastTime>{formattedLastTime(createdDate)}</S.LastTime>
            <S.LikeCount>{likedCount}likes</S.LikeCount>
          </S.ContentInfo>
        </S.ContentBox>
      </S.CommentBox>
    </S.Container>
  );
};

const S = {
  Container: styled.div<{ deletedComment: boolean }>`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    width: 500px;
    margin-bottom: 16px;
    display: ${({ deletedComment }) => (deletedComment ? 'none' : 'flex')};
  `,
  CommentBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  DealButtonBox: styled.div<{ isHover: boolean }>`
    display: flex;
    position: absolute;
    gap: 8px;
    right: 10px;
    opacity: ${({ isHover }) => (isHover ? 1 : 0)};
    pointer-events: ${({ isHover }) => (isHover ? 'visible' : 'none')};
  `,
  User: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;
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
