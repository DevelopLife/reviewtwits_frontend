import styled from '@emotion/styled';

import { UN_FOLLOW } from 'constants/followAndUnFollow';
import { useFollowAndUnFollow } from 'hooks/queries/sns';
import type { Colors } from 'styles/theme';
import type { WrapProps } from 'typings/wrapperProps';

interface SocialUnFollowButtonProps {
  targetUserAccountId: string;
}

const SocialUnFollowButton = ({
  targetUserAccountId,
}: SocialUnFollowButtonProps) => {
  const { unfollow } = useFollowAndUnFollow(targetUserAccountId);

  return (
    <SocialUnFollowButtonView onClick={unfollow}>
      {UN_FOLLOW}
    </SocialUnFollowButtonView>
  );
};

export default SocialUnFollowButton;

interface SocialUnFollowButtonViewProps extends WrapProps {
  onClick: () => void;
}

const SocialUnFollowButtonView = ({
  onClick,
  children,
}: SocialUnFollowButtonViewProps) => {
  return (
    <S.Button color="secondary" onClick={onClick}>
      {children}
    </S.Button>
  );
};

const S = {
  Button: styled.button<{ color: Colors }>`
    padding: 17px 37px;
    border-radius: 15px;

    font-weight: 700;
    font-size: 18px;
    color: white;
    background-color: ${({ theme, color }) => theme.colors[color]};
  `,
};
