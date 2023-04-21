import styled from '@emotion/styled';
import { UN_FOLLOW } from 'constants/followAndUnFollow';

import useFollowAndUnFollow from 'hooks/useFollowAndUnFollow';
import type { Colors } from 'styles/theme';
import type { WrapProps } from 'typings/wrapperProps';

interface SocialUnFollowButtonProps {
  nickname: string;
}

const SocialUnFollowButton = ({ nickname }: SocialUnFollowButtonProps) => {
  const { unfollow } = useFollowAndUnFollow(nickname);

  return (
    <SocialUnFollowButtonView onClick={unfollow} color="secondary">
      {UN_FOLLOW}
    </SocialUnFollowButtonView>
  );
};

export default SocialUnFollowButton;

interface SocialUnFollowButtonViewProps extends WrapProps {
  color: Colors;
  onClick: () => void;
}

const SocialUnFollowButtonView = ({
  color,
  onClick,
  children,
}: SocialUnFollowButtonViewProps) => {
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
