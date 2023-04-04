import Image from 'next/image';
import styled from '@emotion/styled';

import { Colors } from 'styles/theme';

import { ReviewResponseType } from 'typings/reviews';
import { formattedLastTime } from 'utils/format';

import Card from '../../Card';
import ReactionBox from './ReactionBox';
import StarBox from './StarBox';
import ImageList from './ImageList';
import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';

interface ReviewProps {
  data?: ReviewResponseType;
}

const Review = ({ data }: ReviewProps) => {
  const props = {
    data,
  };

  return <ReviewView {...props} />;
};

interface ReviewViewProps {
  data?: ReviewResponseType;
}

const ReviewView = ({ data }: ReviewViewProps) => {
  return (
    <Card>
      <S.Content>
        <S.ScrapButton>
          <BookmarkOutlineIcon />
        </S.ScrapButton>
        <S.ReviewInfoBox>
          <S.UserInfo>
            <S.UserImage src="" alt="" />
            <S.Nickname>{data?.userInfo?.nickname}</S.Nickname>
          </S.UserInfo>
          <StarBox score={data?.score} />
          <S.LastTime>{formattedLastTime(data?.lastModifiedDate)}</S.LastTime>
        </S.ReviewInfoBox>
        <S.ReviewText>{data?.content}</S.ReviewText>
        <ImageList imageNameList={data?.reviewImageNameList} />
        <ReactionBox reactions={data?.reactionResponseList} />
        <S.CommentOpenButton>
          {data?.commentCount}개의 댓글이 달림
        </S.CommentOpenButton>
        <S.ButtonBox>
          <S.Button color="primary">상품 구매</S.Button>
          <S.Button color="secondary">상품 정보</S.Button>
        </S.ButtonBox>
      </S.Content>
    </Card>
  );
};

export default Review;

const S = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    width: 100%;
    max-height: 490px;
    padding: 32px;
  `,

  ScrapButton: styled.button`
    position: absolute;
    top: 15px;
    right: 5px;
  `,

  ReviewInfoBox: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  UserInfo: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  UserImage: styled(Image)`
    background: gray;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  `,

  Nickname: styled.span`
    font-size: 16px;
    font-weight: 500;
    color: black;
  `,

  LastTime: styled.span`
    font-size: 12px;
  `,

  ReviewText: styled.p`
    display: -webkit-box;
    height: 100px;
    overflow: hidden;
    margin: 24px 0;

    font-size: 14px;
    line-height: 1.4;
    word-break: keep-all;
    white-space: normal;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  `,

  CommentOpenButton: styled.button`
    color: black;
    padding: 0;
    font-size: 16px;
    font-weight: 600;

    width: fit-content;
  `,

  ButtonBox: styled.div`
    display: flex;
    gap: 16px;

    margin-top: 40px;
  `,

  Button: styled.button<{ color: Colors }>`
    background: ${({ color, theme }) => theme.colors[color]};
    font-size: 18px;
    padding: 17px;
    color: white;
    border-radius: 15px;

    :first-child {
      width: 70%;
    }

    :last-child {
      width: 30%;
    }
  `,
};
