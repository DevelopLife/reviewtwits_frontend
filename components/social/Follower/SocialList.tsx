import styled from '@emotion/styled';

import SocialCard from 'components/Social/Common/SocialCard';
import { RefObject } from 'react';

import { FollowListType } from 'typings/sns';

interface SocialListProps {
  userList: FollowListType;
  targetRef: RefObject<HTMLDivElement>;
}

const SocialList = ({ userList, targetRef }: SocialListProps) => {
  return (
    <S.Container ref={targetRef}>
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
