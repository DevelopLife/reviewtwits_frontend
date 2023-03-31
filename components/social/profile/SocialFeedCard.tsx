import styled from '@emotion/styled';

import { useBoolean } from 'hooks/useBoolean';
import { WrapProps } from 'typings/wrapperProps';

type FeedCardStyles = {
  width: number;
  height: number;
  borderRadius: number;
};

interface SocialFeedCardProps extends WrapProps {
  styles: FeedCardStyles;
}

interface SocialFeedCardViewProps extends SocialFeedCardProps {
  isHover: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const SocialFeedCard = ({ styles, children }: SocialFeedCardProps) => {
  const { isOpen: isHover, setTrue, setFalse } = useBoolean(false);

  const onMouseEnter = () => {
    console.log('enter');
    setTrue();
  };
  const onMouseLeave = () => {
    console.log('leave');
    setFalse();
  };

  return (
    <SocialFeedCardView
      styles={styles}
      isHover={isHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </SocialFeedCardView>
  );
};

export const SocialFeedCardView = ({
  styles,
  children,
  isHover,
  onMouseEnter,
  onMouseLeave,
}: SocialFeedCardViewProps) => {
  return (
    <S.FeedCard
      {...styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHover && (
        <SocialVirtualFeedCardView>virtual</SocialVirtualFeedCardView>
      )}
      <S.Content>{children}</S.Content>
    </S.FeedCard>
  );
};

export const SocialVirtualFeedCardView = ({ children }: WrapProps) => {
  return <S.VirtualFeedCard>{children}</S.VirtualFeedCard>;
};

const S = {
  FeedCard: styled.div<FeedCardStyles>`
    position: relative;
    background: none;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.16);

    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: ${({ borderRadius }) => borderRadius}px;
  `,
  VirtualFeedCard: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    opacity: 0.7;
    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.gray_2};
  `,
  Content: styled.div``,
};
