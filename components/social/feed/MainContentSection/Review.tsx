import Image from 'next/image';
import styled from '@emotion/styled';

import { Colors } from 'styles/theme';

import Card from '../Card';
import BookmarkOutlineIcon from 'public/icons/bookmark_outline.svg';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';
import PleadingFaceIcon from 'public/icons/pleading_face.svg';
import SunglassesIcon from 'public/icons/sunglasses.svg';
import AngryIcon from 'public/icons/angry.svg';
import KissingHeartIcon from 'public/icons/kissing_heart.svg';
import SocialUserNicknameLink from 'components/social/common/SocialUserNicknameLink';

const Review = () => {
  return (
    <Card>
      <S.Content>
        <S.ScrapButton>
          <BookmarkOutlineIcon />
        </S.ScrapButton>
        <S.ReviewInfoBox>
          <S.UserInfo>
            <S.UserImage src="" alt="" />
            <SocialUserNicknameLink nickname={'slyvia.lehner2'}>
              <S.Nickname>nickname</S.Nickname>
            </SocialUserNicknameLink>
          </S.UserInfo>
          <S.StarBox>
            {Array.from({ length: 4 }).map((_, i) => (
              <Image key={i} width={15} height={15} src={FullStarImg} alt="" />
            ))}
            <Image width={15} height={15} src={EmptyStarImg} alt="" />
          </S.StarBox>
          <S.LastTime>1h</S.LastTime>
        </S.ReviewInfoBox>
        <S.ReviewText>
          저번에는 냉동피자 중에 좀 가격대가 있는 우주인피자 주문했었는데요.
          불고기 피자가 먹고 싶다고 해서 찾다가 오뚜기 불고기 피자가 있길래 주문
          했어요. 우주인피자는 한 판에 만 원이 훌쩍 넘는데, 오뚜기 피자는 3개에
          만 사천원대라 엄청 저렴해요. 확실히 가성비는 갓뚜기 오뚜기 냉동피자가
          넘사 입니다.오븐조리, 전자레인지 조리, 프라이팬 조리법이 있는데요.
          집에서 드실 때는 오븐 혹은 에어프라이어 추천드려요. 프라이팬은 조리가
          좀 어렵고 전자레인지에 조리하면 눅눅합니다 ㅠㅠ 저는 캠핑 가서 먹어서
          난로 위에 올려 데워 먹었어요.겨울 캠핑의 묘미 아니 겠습니까.
        </S.ReviewText>
        <S.ImageList>
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              width={84}
              height={84}
              src=""
              alt=""
              style={{ background: 'gray' }}
            />
          ))}
        </S.ImageList>
        <S.ReactionBox>
          <S.ReactionButton>
            <S.ReactionCnt>2</S.ReactionCnt>
            <PleadingFaceIcon />
          </S.ReactionButton>
          <S.ReactionButton>
            <S.ReactionCnt>9</S.ReactionCnt>
            <SunglassesIcon />
          </S.ReactionButton>
          <S.ReactionButton>
            <S.ReactionCnt>8</S.ReactionCnt>
            <AngryIcon />
          </S.ReactionButton>
          <S.ReactionButton>
            <S.ReactionCnt>13</S.ReactionCnt>
            <KissingHeartIcon />
          </S.ReactionButton>
        </S.ReactionBox>
        <S.CommentOpenButton>24개의 댓글이 달림</S.CommentOpenButton>
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

    height: 490px;
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

  ReactionBox: styled.div`
    display: flex;
    gap: 8px;

    margin-top: 12px;
    margin-bottom: 16px;
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
