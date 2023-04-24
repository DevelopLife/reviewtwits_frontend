import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { Colors } from 'styles/theme';

import { ReviewResponseType } from 'typings/reviews';
import { formattedLastTime, formattedImageUrl } from 'utils/format';

import Card from '../../Card';
import ReactionBox from './ReactionBox';
import StarBox from './StarBox';
import ImageList from './ImageList';
import AddReactionBox from './AddReactionBox';
import ScrapButton from './ScrapButton';
import CommentIcon from 'public/icons/comment.svg';
import useModal from 'hooks/useModal';

import MODAL_LIST from 'constants/modal';
import SocialUserNicknameLink from 'components/social/common/SocialUserNicknameLink';

interface ReviewProps {
  data?: ReviewResponseType;
}

const Review = ({ data }: ReviewProps) => {
  const router = useRouter();
  const modal = useModal();

  const goProductPage = () => data && router.push(data.productUrl);

  // 임시
  const goProductInfoPage = () =>
    data && router.push(`/product?name=${data.productName}`);

  const handleOpenModal = () => {
    modal.show({ key: MODAL_LIST.SOCIAL_FEED_DETAIL });
  };

  const props = {
    data,
    isReactionExist:
      data?.reactionResponses && Object.keys(data.reactionResponses).length > 0,
    goProductPage,
    goProductInfoPage,
    handleOpenModal,
  };

  return <ReviewView {...props} />;
};

interface ReviewViewProps {
  data?: ReviewResponseType;
  isReactionExist?: boolean;
  goProductPage: () => void;
  goProductInfoPage: () => void;
  handleOpenModal: () => void;
}

const ReviewView = ({
  data,
  isReactionExist,
  goProductPage,
  goProductInfoPage,
  handleOpenModal,
}: ReviewViewProps) => {
  const openModal = () => {
    handleOpenModal();
  };

  if (!data) return null;
  return (
    <Card>
      <S.Content>
        <S.ScrapButtonWrap>
          <ScrapButton isScrapped={data.isScrapped} reviewId={data.reviewId} />
        </S.ScrapButtonWrap>
        <S.ReviewInfoBox>
          <SocialUserNicknameLink nickname={data?.userInfo?.nickname}>
            <S.UserInfo>
              <S.UserImage
                width={32}
                height={32}
                src={
                  data?.userInfo?.profileImageUrl
                    ? formattedImageUrl(data.userInfo.profileImageUrl)
                    : '/images/default_user_profile_img.png'
                }
                alt=""
              />
              <S.Nickname>{data?.userInfo?.nickname}</S.Nickname>
            </S.UserInfo>
          </SocialUserNicknameLink>
          <StarBox score={data?.score} />
          <S.LastTime>{formattedLastTime(data?.lastModifiedDate)}</S.LastTime>
        </S.ReviewInfoBox>
        <S.ReviewText onClick={openModal}>{data?.content}</S.ReviewText>
        <ImageList
          imageNameList={data?.reviewImageNameList}
          handleOpenModal={openModal}
        />
        <S.UserResponseBox>
          <AddReactionBox reviewId={data?.reviewId} />
          <S.CommentButton onClick={openModal}>
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
          <S.Button color="primary" onClick={goProductPage}>
            상품 구매
          </S.Button>
          <S.Button color="secondary" onClick={goProductInfoPage}>
            상품 정보
          </S.Button>
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
