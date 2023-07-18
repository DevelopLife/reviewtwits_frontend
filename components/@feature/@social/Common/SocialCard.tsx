import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import SocialFollowAndUnfollowButton from 'components/@feature/@social/Profile/SocialFollowAndUnfollowButton';
import { FOLLOW_UNFOLLOW } from 'constants/social';
import { formattedProfileImageUrl } from 'utils/format';
import cssUtils from 'styles/css';

interface SocialCardProps {
  imageUrl: string | null;
  nickname: string;
  role: string;
}

const SocialCard = ({ imageUrl, nickname, role }: SocialCardProps) => {
  const router = useRouter();

  const onUserClick = () => {
    router.push(`/social/user/${nickname}`);
  };

  return (
    <S.Container>
      <S.UserBox onClick={onUserClick}>
        <S.ImageBox>
          <Image
            src={formattedProfileImageUrl(imageUrl)}
            alt="userProfile"
            fill
          />
        </S.ImageBox>
        <S.UserInfos>
          <S.UserName>{nickname}</S.UserName>
          <S.UserRole>{role}</S.UserRole>
        </S.UserInfos>
      </S.UserBox>
      <SocialFollowAndUnfollowButton
        nickname={nickname}
        accent="secondary"
        size="small"
        fontSize={13}
        TextList={[FOLLOW_UNFOLLOW.UNFOLLOW, FOLLOW_UNFOLLOW.FOLLOW]}
      />
    </S.Container>
  );
};

export default SocialCard;

const S = {
  Container: styled.div`
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 32px;

    width: 457px;
    height: 136px;

    background: #181818;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
  `,

  UserBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    gap: 8px;

    width: 175px;
    height: 72px;

    cursor: pointer;
  `,

  ImageBox: styled.div`
    position: relative;
    min-width: 72px;
    min-height: 72px;

    border-radius: 50%;
    overflow: hidden;

    background-color: white;
  `,

  UserInfos: styled.div`
    display: flex;
    flex-direction: column;
  `,

  UserName: styled.h3`
    width: 100%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;

    ${cssUtils.cssTextEllipsis(1)};

    color: #ffffff;
  `,

  UserRole: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* White */

    color: #ffffff;
  `,

  SocialButton: styled.button`
    width: 59px;
    height: 28px;

    /* Secondary */

    background: #2d87ff;
    border-radius: 37px;

    align-items: center;
    text-align: center;

    /* White */

    color: #ffffff;
  `,
};
