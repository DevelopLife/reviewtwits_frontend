import { useState } from 'react';

import ChangeFollowListButton from './ChangeFollowListButton';
import SocialList from './SocialList';
import { useGetFollowerList, useGetFollowingList } from 'hooks/queries/sns';
import useUserProfile from 'hooks/queries/users';
import { FOLLOW_BUTTON } from 'constants/social';

type FollowButton = (typeof FOLLOW_BUTTON)[keyof typeof FOLLOW_BUTTON];

const FollowerSection = () => {
  const useProfile = useUserProfile();
  const { nickname } = useProfile;
  const { data: followerList } = useGetFollowerList(nickname || '');
  const { data: followingList } = useGetFollowingList(nickname || '');

  const [targettedButton, setTargettedButton] = useState<FollowButton>(
    FOLLOW_BUTTON.FOLLOWER
  );

  const userList =
    targettedButton === 'FOLLOWER' ? followerList?.data : followingList?.data;

  return (
    <div>
      <ChangeFollowListButton
        targettedButton={targettedButton}
        setTargettedButton={setTargettedButton}
      />
      {userList?.length ? <SocialList userList={userList} /> : null}
    </div>
  );
};

export default FollowerSection;
