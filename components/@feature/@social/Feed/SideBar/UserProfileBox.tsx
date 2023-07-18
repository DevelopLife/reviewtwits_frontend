import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

import { useUserProfile } from 'hooks/queries/users';
import { formattedProfileImageUrl } from 'utils/format';
import SocialUserNicknameLink from 'components/@feature/@social/Common/SocialUserNicknameLink';
import { PAGE_LIST } from 'constants/routers';
import Button from 'components/@ui/Button';
import Button2 from 'components/@ui/Button2';

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
          src={formattedProfileImageUrl(profileImageUrl)}
          alt="userImg"
        />
      </SocialUserNicknameLink>
      <S.UserInfoBox>
        <S.UserNickname>{nickname}</S.UserNickname>
        <Link href={PAGE_LIST.PROFILE_SETTING}>
          <Button2
            accent="primary"
            shape="circle"
            paddingSize="small"
            fill
            isFull={false}
          >
            수정하기
          </Button2>
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
