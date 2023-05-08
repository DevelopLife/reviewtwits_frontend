import Image from 'next/image';
import styled from '@emotion/styled';

import { useGetRecentUpdatedUsers } from 'hooks/queries/sns';
import { FollowType } from 'typings/sns';
import { formattedImageUrl } from 'utils/format';

const UserFilterBar = () => {
  const { data: usersData } = useGetRecentUpdatedUsers();

  const props = { usersData };

  return <UserFilterBarView {...props} />;
};

interface UserFilterBarViewProps {
  usersData?: FollowType[];
}

const UserFilterBarView = ({ usersData }: UserFilterBarViewProps) => {
  return (
    <S.Bar>
      {usersData?.map((user, i) => (
        <S.UserBox key={i}>
          <S.UserImage
            width={92}
            height={92}
            src={
              user.profileImageUrl
                ? formattedImageUrl(user.profileImageUrl)
                : ''
            }
            alt=""
          />
          <S.Nickname>{user.nickname}</S.Nickname>
        </S.UserBox>
      ))}
    </S.Bar>
  );
};

export default UserFilterBar;

const S = {
  Bar: styled.div`
    display: flex;
    gap: 30px;
  `,

  UserBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    color: black;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `,

  UserImage: styled(Image)`
    border-radius: 50%;
    background: gray;
  `,

  Nickname: styled.span`
    font-size: 18px;
  `,
};
