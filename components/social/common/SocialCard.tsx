import { FOLLOW_UNFOLLOW } from 'constants/social';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './SocialCard.styles';
import { formattedImageUrl } from 'utils/format';

interface SocialCardProps {
  imageUrl: string | null;
  nickname: string;
  role: string;
}

const SocialCard = ({ imageUrl, nickname, role }: SocialCardProps) => {
  const [followState, setFollowState] = useState();

  return (
    <S.Container>
      <S.userBox>
        <S.ImageBox>
          <Image
            src={imageUrl ? formattedImageUrl(imageUrl) : ''}
            alt="userProfile"
            fill
          />
        </S.ImageBox>
        <S.UserInfos>
          <S.UserName>{nickname}</S.UserName>
          <S.UserRole>{role}</S.UserRole>
        </S.UserInfos>
      </S.userBox>

      <S.SocialButton>{FOLLOW_UNFOLLOW.FOLLOW}</S.SocialButton>
    </S.Container>
  );
};

export default SocialCard;
