import Image from 'next/image';
import styled from '@emotion/styled';

import { Colors } from 'styles/theme';

import { ReviewResponseType } from 'typings/reviews';
import { formattedLastTime } from 'utils/format';

import Card from '../../Card';
import ReactionBox from './ReactionBox';
import StarBox from './StarBox';
import ImageList from './ImageList';
import AddReactionBox from './AddReactionBox';
import ScrapButton from './ScrapButton';
import CommentIcon from 'public/icons/comment.svg';

interface ReviewProps {
  data?: ReviewResponseType;
}

const Review = ({ data }: ReviewProps) => {
  const props = {
    data,
    isReactionExist:
      data?.reactionResponses && Object.keys(data.reactionResponses).length > 0,
  };

  return <ReviewView {...props} />;
};

interface ReviewViewProps {
  data?: ReviewResponseType;
  isReactionExist?: boolean;
}

const ReviewView = ({ data, isReactionExist }: ReviewViewProps) => {
  if (!data) return null;
  return (
    <Card>
      <S.Content>
        <S.ScrapButtonWrap>
          <ScrapButton isScrapped={data.isScrapped} reviewId={data.reviewId} />
        </S.ScrapButtonWrap>
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
        <S.UserResponseBox>
          <AddReactionBox reviewId={data?.reviewId} />
          <S.CommentButton>
            <CommentIcon />
            {data?.commentCount}
          </S.CommentButton>
        </S.UserResponseBox>
        {isReactionExist && (
          <ReactionBox
            reviewId={data?.reviewId}
            reactions={data?.reactionResponses}
          />
        )}
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

  ScrapButtonWrap: styled.div`
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

  UserResponseBox: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    position: relative;
    margin-top: 24px;
  `,

  CommentButton: styled.button`
    display: flex;
    justify-content: center;
    gap: 5px;

    color: black;
    padding: 0 0 2px 0;
    font-size: 18px;
    font-weight: 700;

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
