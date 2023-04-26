import styled from '@emotion/styled';

import SocialCard from 'components/social/common/SocialCard';

import { FollowListType } from 'typings/sns';

const SocialList = ({ userList }: { userList: FollowListType }) => {
  return (
    <S.Container>
      {userList.map(
        ({ nickname, userId, detailIntroduce, profileImageUrl }) => (
          <SocialCard
            key={userId}
            imageUrl={profileImageUrl}
            nickname={nickname}
            role={detailIntroduce}
          />
        )
      )}
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
