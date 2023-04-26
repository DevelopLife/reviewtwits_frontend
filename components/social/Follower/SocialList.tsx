import styled from '@emotion/styled';

import SocialCard from 'components/social/common/SocialCard';

import { FollowListType } from 'typings/sns';

const SocialList = ({ userList }: { userList: FollowListType }) => {
  console.log(userList);
  return (
    <S.Container>
      {userList.map(({ nickname, userId, profileImage }) => (
        <SocialCard
          key={userId}
          imageUrl={profileImage}
          nickname={nickname}
          role={''}
        />
      ))}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 457px;
    height: auto;

    margin-top: 32px;
    margin-bottom: 98px;
  `,
};

export default SocialList;
