import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { useGetRecentUpdatedUsers } from 'hooks/queries/sns';
import { FollowType } from 'typings/sns';
import { selectedUserState } from 'states/reviews';
import { formattedProfileImageUrl } from 'utils/format';
import useHorizontalScroll from 'hooks/useHorizontalScroll';

const UserFilterBar = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserState);
  const { data: users } = useGetRecentUpdatedUsers();
  const scrollRef = useHorizontalScroll();

  const filterReview = (nickname: string) => {
    selectedUser === nickname ? setSelectedUser('') : setSelectedUser(nickname);
  };

  const props = {
    scrollRef,
    users,
    selectedUser,
    handleClickUserImg: filterReview,
  };

  return <UserFilterBarView {...props} />;
};

interface UserFilterBarViewProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  users?: FollowType[];
  selectedUser: string;
  handleClickUserImg: (nickname: string) => void;
}

const UserFilterBarView = ({
  scrollRef,
  users,
  selectedUser,
  handleClickUserImg,
}: UserFilterBarViewProps) => {
  return (
    <S.Bar ref={scrollRef}>
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

    width: 510px;
    min-height: 120px;
    overflow-x: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
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
