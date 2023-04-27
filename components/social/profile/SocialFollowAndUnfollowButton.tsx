import styled from '@emotion/styled';

import { useFollowAndUnFollow } from 'hooks/queries/sns';
import useGetIsFollowing from 'hooks/useGetIsFollowing';
import { ReactElement } from 'react';
import type { WrapProps } from 'typings/wrapperProps';

interface FollowAndUnFollowButtonProps {
  nickname: string;
  size: 'small' | 'normal';
  TextList: [string, string];
}

const SocialFollowAndUnfollowButton = ({
  nickname,
  size,
  TextList,
}: FollowAndUnFollowButtonProps) => {
  const { follow, unfollow } = useFollowAndUnFollow(nickname);
  const isFollowing = useGetIsFollowing(nickname);
  const [unfollowText, followText] = TextList;

  return (
    <SocialFollowButtonView
      onClick={isFollowing ? unfollow : follow}
      size={size}
    >
      {isFollowing ? unfollowText : followText}
    </SocialFollowButtonView>
  );
};

export default SocialFollowAndUnfollowButton;

interface SocialFollowButtonViewProps extends WrapProps {
  size?: 'small' | 'normal';
  onClick: () => void;
}

const SocialFollowButtonView = ({
  size = 'normal',
  onClick,
  children,
}: SocialFollowButtonViewProps) => {
  const FollowButtons: Record<
    'small' | 'normal',
    (props: Omit<SocialFollowButtonViewProps, 'size'>) => ReactElement
  > = {
    small: (props) => <S.SmallButton {...props} />,
    normal: (props) => <S.NormalButton {...props} />,
  };
  return FollowButtons[size]({ onClick, children });
};

const S = {
  NormalButton: styled.button`
    padding: 17px 37px;
    border-radius: 15px;

    font-weight: 700;
    font-size: 18px;
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  SmallButton: styled.button`
    width: 59px;
    height: 28px;

    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 37px;

    align-items: center;
    text-align: center;

    color: ${({ theme }) => theme.colors.white};
  `,
};
