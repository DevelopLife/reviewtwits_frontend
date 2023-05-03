import styled from '@emotion/styled';
import Image from 'next/image';
import { CommentResponseType } from 'typings/reviews';
import { formattedImageUrl } from 'utils/format';

interface CommentProps {
  commentsData: CommentResponseType[] | [];
}

const Comment = ({ commentsData }: CommentProps) => {
  return (
    <S.Container>
      {commentsData.map(({ commentId, content, userInfo }) => (
        <div key={commentId}>
          <S.User>
            <S.UserImage
              src={
                userInfo.profileImageUrl
                  ? formattedImageUrl(userInfo.profileImageUrl)
                  : '/images/default_user_profile_img.png'
              }
              alt=""
              width={40}
              height={40}
            />
            <S.UserName>{userInfo.nickname}</S.UserName>
            <S.LikeButton>♡</S.LikeButton>
          </S.User>
          <S.ContentBox>
            <S.Content>{content}</S.Content>
            <S.ContentInfo>
              <S.LastTime>1d</S.LastTime>
              <S.LikeCount>12likes</S.LikeCount>
            </S.ContentInfo>
          </S.ContentBox>
        </div>
      ))}
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
    border: 1px solid black;
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
