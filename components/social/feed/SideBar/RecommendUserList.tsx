import Image from 'next/image';

import { useGetFollowSuggestion } from 'hooks/queries/sns';
import { FollowType } from 'typings/sns';
import { formattedImageUrl } from 'utils/format';

import styled from '@emotion/styled';
import Button from './common/Button';

const RecommendUserList = () => {
  const { data: userList } = useGetFollowSuggestion();

  const props = {
    userList,
  };

  return <RecommendUserListView {...props} />;
};

interface RecommendUserListViewProps {
  userList?: FollowType[];
}

const RecommendUserListView = ({ userList }: RecommendUserListViewProps) => {
  return (
    <S.List>
      {userList?.map((user, i) => (
        <S.User key={i}>
          <S.UserBox>
            <S.UserImage
              width={40}
              height={40}
              src={
                user.profileImage
                  ? formattedImageUrl(user.profileImage)
                  : '/images/default_user_profile_img.png'
              }
              alt=""
            />
            <S.UserInfoBox>
              <S.UserNickname>{user.nickname}</S.UserNickname>
              {user.followers > 0 && (
                <S.FollowedByText>followed by nickname</S.FollowedByText>
              )}
            </S.UserInfoBox>
          </S.UserBox>
          <Button color="secondary">팔로우</Button>
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
