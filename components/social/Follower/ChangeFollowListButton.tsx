import styled from '@emotion/styled';
import { FOLLOW_BUTTON } from 'constants/social';
import React, { useState } from 'react';

type FollowButton = (typeof FOLLOW_BUTTON)[keyof typeof FOLLOW_BUTTON];

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  value?: FollowButton;
}

const ChangeFollowListButton = () => {
  const [targettedButton, setTargettedButton] = useState<FollowButton>(
    FOLLOW_BUTTON.FOLLOWER
  );
  console.log('안녕');
  const onFollowButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.innerText);
    console.log(e.currentTarget.value);
    const { innerText, value } = e.currentTarget;
    setTargettedButton(value);
  };

  return (
    <S.Buttons>
      <S.Button
        isActive={true}
        onClick={onFollowButtonClick}
        value={FOLLOW_BUTTON.FOLLOWER}
      >
        {FOLLOW_BUTTON.FOLLOWER}
      </S.Button>
      <S.Button isActive={false} onClick={onFollowButtonClick}>
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
