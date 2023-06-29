import { useEffect, useState } from 'react';

import ChangeFollowListButton from './ChangeFollowListButton';
import SocialList from './SocialList';
import { useGetFollowerList, useGetFollowingList } from 'hooks/queries/sns';
import useUserProfile from 'hooks/queries/users';
import { FOLLOW_BUTTON } from 'constants/social';
import styled from '@emotion/styled';
import { useQueryClient } from '@tanstack/react-query';
import { queryKey } from 'hooks/queries';

type FollowButton = (typeof FOLLOW_BUTTON)[keyof typeof FOLLOW_BUTTON];

const FollowerSection = () => {
  const useProfile = useUserProfile();
  const { nickname } = useProfile;
  const {
    targetRef: followerListRef,
    data: followerList,
    followerListInfiniteQuery,
  } = useGetFollowerList(nickname || '');
  const {
    targetRef: followingListRef,
    data: followingList,
    followingListInfiniteQuery,
  } = useGetFollowingList(nickname || '');

  const [targettedButton, setTargettedButton] = useState<FollowButton>(
    FOLLOW_BUTTON.FOLLOWER
  );

  const userList =
    targettedButton === 'FOLLOWER' ? followerList : followingList;
  const targetRef =
    targettedButton === 'FOLLOWER' ? followerListRef : followingListRef;

  const queryClient = useQueryClient();
  useEffect(() => {
    userList === followerList
      ? queryClient.invalidateQueries(queryKey.followingList())
      : queryClient.invalidateQueries(queryKey.followerList());
  }, [
    followerList,
    followerListInfiniteQuery,
    followingListInfiniteQuery,
    queryClient,
    userList,
  ]);

  return (
    <S.FollowerSectinoContainer>
      <ChangeFollowListButton
        targettedButton={targettedButton}
        setTargettedButton={setTargettedButton}
      />
      {userList?.length ? (
        <SocialList userList={userList} targetRef={targetRef} />
      ) : (
        <S.GuideMessage>{`You Have No ${targettedButton}`}</S.GuideMessage>
      )}
    </S.FollowerSectinoContainer>
  );
};

const S = {
  FollowerSectinoContainer: styled.div``,
  GuideMessage: styled.h1`
    text-align: center;
    margin-top: 30px;
  `,
};

export default FollowerSection;
