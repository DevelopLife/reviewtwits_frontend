import Image from 'next/image';
import styled from '@emotion/styled';

import { Colors } from 'styles/theme';

import { ReactionResponseType, ReviewResponseType } from 'typings/reviews';
import { formattedImageUrl, formattedLastTime } from 'utils/format';

import Card from '../Card';
import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

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
          <S.StarBox>
            {data?.score &&
              Array.from({ length: 5 }).map((_, i) => (
                <S.Star
                  key={i}
                  src={data?.score <= i ? EmptyStarImg : FullStarImg}
                  alt="star"
                />
              ))}
          </S.StarBox>
          {data?.lastModifiedDate && (
            <S.LastTime>{formattedLastTime(data.lastModifiedDate)}</S.LastTime>
          )}
        </S.ReviewInfoBox>
        <S.ReviewText>{data?.content}</S.ReviewText>
        <S.ImageList>
          {data?.reviewImageNameList?.map((url, i) => (
            <Image
              key={i}
              width={84}
              height={84}
              src={formattedImageUrl(url)}
              unoptimized={true}
              alt="reviewImage"
            />
          ))}
        </S.ImageList>
        <S.ReactionBox>
          {data?.reactionResponseList?.map(
            (reaction: ReactionResponseType, i) => (
              <S.ReactionButton key={i}>
                <S.ReactionCnt>{reaction.count}</S.ReactionCnt>
                <Image
                  src={`/icons/${reaction.reactionType.toLowerCase()}.png`}
                  width="15"
                  height="15"
                  alt=""
                />
              </S.ReactionButton>
            )
          )}
        </S.ReactionBox>
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

  StarBox: styled.div`
    display: flex;
    gap: 3px;
  `,

  Star: styled(Image)`
    width: 15px;
    height: 15px;
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

  ImageList: styled.div`
    display: flex;
    gap: 4px;

    border-radius: 15px;
    overflow: hidden;
  `,

  ReviewImage: styled(Image)`
    width: 84px;
    height: 84px;

    object-fit: cover;
  `,

  ReactionBox: styled.div`
    display: flex;
    gap: 8px;

    width: 100%;
    margin-top: 12px;
    margin-bottom: 16px;

    // 임시
    overflow-x: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  ReactionButton: styled.button`
    display: flex;
    align-items: center;
    gap: 5px;

    border: 1px solid ${({ theme }) => theme.colors.gray_6};
    border-radius: 15px;
    padding: 4px 10px;
  `,

  ReactionCnt: styled.span``,

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
