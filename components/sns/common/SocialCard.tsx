import { FOLLOW_UNFOLLOW } from 'constants/social';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './SocialCard.styles';

interface SocialCardProps {
  name: string;
  role: string;
}

const SocialCard = ({ name, role }: SocialCardProps) => {
  const [followState, setFollowState] = useState();
  return (
    <S.Container>
      <S.userBox>
        <S.ImageBox>
          <Image src="" alt="" />
        </S.ImageBox>
        <S.UserInfos>
          <S.UserName>{name}</S.UserName>
          <S.UserRole>{role}</S.UserRole>
        </S.UserInfos>
      </S.userBox>

      <S.SocialButton>{FOLLOW_UNFOLLOW.FOLLOW}</S.SocialButton>
    </S.Container>
  );
};

export default SocialCard;
