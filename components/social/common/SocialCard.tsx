import { FOLLOW_UNFOLLOW } from 'constants/social';
import Image from 'next/image';
import * as S from './SocialCard.styles';
import { formattedProfileImageUrl } from 'utils/format';

import SocialFollowAndUnfollowButton from 'components/social/profile/SocialFollowAndUnfollowButton';

interface SocialCardProps {
  imageUrl: string | null;
  nickname: string;
  role: string;
}

const SocialCard = ({ imageUrl, nickname, role }: SocialCardProps) => {
  return (
    <S.Container>
      <S.userBox>
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
      </S.userBox>
      <SocialFollowAndUnfollowButton
        nickname={nickname}
        size={'small'}
        TextList={[FOLLOW_UNFOLLOW.UNFOLLOW, FOLLOW_UNFOLLOW.FOLLOW]}
      />
    </S.Container>
  );
};

export default SocialCard;
