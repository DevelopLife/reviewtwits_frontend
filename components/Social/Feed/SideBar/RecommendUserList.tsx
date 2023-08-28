import Image from 'next/image';

import {
  useFollowAndUnFollow,
  useGetFollowSuggestion,
} from 'hooks/queries/sns';
import { FollowType } from 'typings/sns';
import { formattedProfileImageUrl } from 'utils/format';

import styled from '@emotion/styled';
import Button from './Common/Button';

const RecommendUserList = () => {
  const { data: userList } = useGetFollowSuggestion();
  const { follow, unfollow } = useFollowAndUnFollow();

  const toggleFollow = (isFollowed: boolean, nickname: string) => {
    isFollowed ? unfollow(nickname) : follow(nickname);
  };

  const props = {
    userList,
    toggleFollow,
  };

  return <RecommendUserListView {...props} />;
};

interface RecommendUserListViewProps {
  userList?: FollowType[];
  toggleFollow: (isFollowed: boolean, nickname: string) => void;
}

const RecommendUserListView = ({
  userList,
  toggleFollow,
}: RecommendUserListViewProps) => {
  return (
    <S.List>
      {userList?.map((user, i) => (
        <S.User key={i}>
          <S.UserBox>
            <S.UserImage
              width={40}
              height={40}
              src={formattedProfileImageUrl(user.profileImageUrl)}
              alt=""
            />
            <S.UserInfoBox>
              <S.UserNickname>{user.nickname}</S.UserNickname>
              {user.followers > 0 && (
                <S.FollowedByText>followed by nickname</S.FollowedByText>
              )}
            </S.UserInfoBox>
          </S.UserBox>
          <Button
            color="secondary"
            onClick={() => toggleFollow(user.isFollowed, user.nickname)}
          >
            {user.isFollowed ? '언팔로우' : '팔로우'}
          </Button>
        </S.User>
      ))}
    </S.List>
  );
};

export default RecommendUserList;

const S = {
  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  User: styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  UserBox: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,

  UserImage: styled(Image)`
    border-radius: 50%;
    background: gray;
  `,

  UserInfoBox: styled.div`
    display: flex;
    flex-direction: column;

    gap: 3px;
  `,

  UserNickname: styled.span`
    font-size: 14px;
    font-weight: 700;
  `,

  FollowedByText: styled.span`
    font-size: 10px;
    font-weight: 300;
  `,
};
