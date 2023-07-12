import styled from '@emotion/styled';
import { FOLLOW_BUTTON } from 'constants/social';
import React, { Dispatch, SetStateAction } from 'react';

type FollowButton = (typeof FOLLOW_BUTTON)[keyof typeof FOLLOW_BUTTON];

interface ChangeFollowListButtonProps {
  targettedButton: FollowButton;
  setTargettedButton: Dispatch<SetStateAction<FollowButton>>;
}

const ChangeFollowListButton = ({
  targettedButton,
  setTargettedButton,
}: ChangeFollowListButtonProps) => {
  const onFollowButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    value === FOLLOW_BUTTON.FOLLOWER
      ? setTargettedButton(FOLLOW_BUTTON.FOLLOWER)
      : setTargettedButton(FOLLOW_BUTTON.FOLLOWING);
  };

  return (
    <S.Buttons>
      <S.Button
        isActive={FOLLOW_BUTTON.FOLLOWER === targettedButton}
        onClick={onFollowButtonClick}
        value={FOLLOW_BUTTON.FOLLOWER}
      >
        {FOLLOW_BUTTON.FOLLOWER}
      </S.Button>
      <S.Button
        isActive={FOLLOW_BUTTON.FOLLOWING === targettedButton}
        onClick={onFollowButtonClick}
      >
        {FOLLOW_BUTTON.FOLLOWING}
      </S.Button>
    </S.Buttons>
  );
};

const S = {
  Buttons: styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 18px;

    /* width: 302px; */
    min-width: 302px;
    height: 63px;
    padding-left: 36px;
    padding-right: 36px;

    border-radius: 32px;

    background: ${({ theme }) => theme.colors.gray_6};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.21);

    cursor: pointer;
  `,

  Button: styled.button<{ isActive: boolean }>`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    padding-top: 16px;
    padding-bottom: 16px;

    /* White */

    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.white : theme.colors.gray_5};
  `,
};

export default ChangeFollowListButton;
