import styled from '@emotion/styled';
import { FOLLOW } from 'constants/followAndUnFollow';

import { useFollowAndUnFollow } from 'hooks/queries/sns';
import type { Colors } from 'styles/theme';
import type { WrapProps } from 'typings/wrapperProps';

interface FollowAndUnFollowButtonProps {
  nickname: string;
}

const SocialFollowButton = ({ nickname }: FollowAndUnFollowButtonProps) => {
  const { follow } = useFollowAndUnFollow();

  return (
    <SocialFollowButtonView onClick={() => follow(nickname)} color="secondary">
      {FOLLOW}
    </SocialFollowButtonView>
  );
};

export default SocialFollowButton;

interface SocialFollowButtonViewProps extends WrapProps {
  color: Colors;
  onClick: () => void;
}

const SocialFollowButtonView = ({
  color,
  onClick,
  children,
}: SocialFollowButtonViewProps) => {
  return (
    <S.Button color={color} onClick={onClick}>
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
