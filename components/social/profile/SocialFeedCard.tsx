import styled from '@emotion/styled';

import { useBoolean } from 'hooks/useBoolean';
import { WrapProps } from 'typings/wrapperProps';

import MessageIcon from 'public/icons/message.svg';
import SmileIcon from 'public/icons/smile.svg';

type FeedCardStyles = {
  width: number;
  height: number;
  borderRadius: number;
};

interface SocialFeedCardProps extends WrapProps {
  styles: FeedCardStyles;
  emojiCount: number;
  commentCount: number;
}

interface SocialFeedCardViewProps extends SocialFeedCardProps {
  isHover: boolean;

  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const SocialFeedCard = ({
  styles,
  emojiCount,
  commentCount,
  children,
}: SocialFeedCardProps) => {
  const { isOpen: isHover, setTrue, setFalse } = useBoolean(false);

  const onMouseEnter = () => setTrue();
  const onMouseLeave = () => setFalse();

  return (
    <SocialFeedCardView
      styles={styles}
      isHover={isHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      emojiCount={emojiCount}
      commentCount={commentCount}
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
  emojiCount,
  commentCount,
}: SocialFeedCardViewProps) => {
  return (
    <S.FeedCard
      {...styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <S.Content>{children}</S.Content>
      {isHover && (
        <SocialVirtualFeedCardView>
          <S.VirtualContentItem>
            <SmileIcon />
            {emojiCount}
          </S.VirtualContentItem>
          <S.VirtualContentItem>
            <MessageIcon />
            {commentCount}
          </S.VirtualContentItem>
        </SocialVirtualFeedCardView>
      )}
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
    gap: 20px;
    height: 100%;

    opacity: 0.5;
    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.gray_1};
  `,
  VirtualContentItem: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.black};
  `,
  Content: styled.div``,
};
