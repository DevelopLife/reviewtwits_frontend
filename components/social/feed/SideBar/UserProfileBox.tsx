import Image from 'next/image';
import Link from 'next/link';

import useUserProfile from 'hooks/queries/users';
import { formattedImageUrl } from 'utils/format';

import styled from '@emotion/styled';
import SocialUserNicknameLink from 'components/social/common/SocialUserNicknameLink';
import Button from './common/Button';

const UserProfileBox = () => {
  const { nickname, profileImageUrl } = useUserProfile();

  const props = {
    nickname,
    profileImageUrl,
  };

  return <UserProfileBoxView {...props} />;
};

interface UserProfileBoxViewProps {
  nickname?: string;
  profileImageUrl?: string;
}

const UserProfileBoxView = ({
  nickname,
  profileImageUrl,
}: UserProfileBoxViewProps) => {
  return (
    <S.UserProfileBox>
      <SocialUserNicknameLink nickname={nickname}>
        <S.UserImage
          width={68}
          height={68}
          src={
            profileImageUrl
              ? formattedImageUrl(profileImageUrl)
              : '/images/default_user_profile_img.png'
          }
          alt="userImg"
        />
      </SocialUserNicknameLink>
      <S.UserInfoBox>
        <S.UserNickname>{nickname}</S.UserNickname>
        <Link href="/setting/profile">
          <Button color="primary">수정하기</Button>
        </Link>
      </S.UserInfoBox>
    </S.UserProfileBox>
  );
};

export default UserProfileBox;

const S = {
  UserProfileBox: styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    margin-bottom: 32px;
  `,

  UserImage: styled(Image)`
    border-radius: 50%;
  `,

  UserInfoBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  UserNickname: styled.span`
    font-size: 16px;
  `,
};
