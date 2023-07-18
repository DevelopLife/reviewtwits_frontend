import { MouseEventHandler } from 'react';

import Button2 from 'components/@ui/Button2';

import { useFollowAndUnFollow } from 'hooks/queries/sns';
import useGetIsFollowing from 'hooks/useGetIsFollowing';
import type { WrapProps } from 'typings/wrapperProps';

interface FollowAndUnFollowButtonProps {
  nickname: string;
  accent: 'primary' | 'secondary' | 'common';
  size: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'rectangle';
  fontSize?: number;
  fontWeight?: number;
  TextList: [string, string];
}

const SocialFollowAndUnfollowButton = ({
  nickname,
  TextList,
  ...rest
}: FollowAndUnFollowButtonProps) => {
  const { follow, unfollow } = useFollowAndUnFollow();
  const isFollowing = useGetIsFollowing(nickname);
  const [unfollowText, followText] = TextList;

  return (
    <SocialFollowButtonView
      onClick={isFollowing ? () => unfollow(nickname) : () => follow(nickname)}
      {...rest}
    >
      {isFollowing ? unfollowText : followText}
    </SocialFollowButtonView>
  );
};

export default SocialFollowAndUnfollowButton;

interface SocialFollowButtonViewProps extends WrapProps {
  accent: 'primary' | 'secondary' | 'common';
  size: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'rectangle';
  fontSize?: number;
  fontWeight?: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const SocialFollowButtonView = ({
  children,
  size,
  ...rest
}: SocialFollowButtonViewProps) => {
  return (
    <Button2 paddingSize={size} {...rest}>
      {children}
    </Button2>
  );
};
