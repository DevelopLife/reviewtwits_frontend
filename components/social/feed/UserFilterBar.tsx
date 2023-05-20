import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { useGetRecentUpdatedUsers } from 'hooks/queries/sns';
import { FollowType } from 'typings/sns';
import { selectedUserState } from 'states/reviews';
import { formattedProfileImageUrl } from 'utils/format';

const UserFilterBar = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserState);
  const { data: users } = useGetRecentUpdatedUsers();

  const filterReview = (nickname: string) => {
    selectedUser === nickname ? setSelectedUser('') : setSelectedUser(nickname);
  };

  const props = { users, selectedUser, handleClickUserImg: filterReview };

  return <UserFilterBarView {...props} />;
};

interface UserFilterBarViewProps {
  users?: FollowType[];
  selectedUser: string;
  handleClickUserImg: (nickname: string) => void;
}

const UserFilterBarView = ({
  users,
  selectedUser,
  handleClickUserImg,
}: UserFilterBarViewProps) => {
  return (
    <S.Bar>
      {users?.map((user, i) => (
        <S.UserBox key={i} onClick={() => handleClickUserImg(user.nickname)}>
          <S.UserImage
            width={92}
            height={92}
            isSelected={selectedUser === user.nickname}
            src={formattedProfileImageUrl(user.profileImageUrl)}
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

  UserImage: styled(Image)<{ isSelected: boolean }>`
    border-radius: 50%;
    background: gray;
    box-sizing: border-box;

    ${({ theme, isSelected }) => {
      if (isSelected) {
        return css`
          border: 3px solid ${theme.colors.secondary};
        `;
      }
    }}
  `,

  Nickname: styled.span`
    font-size: 18px;
  `,
};
