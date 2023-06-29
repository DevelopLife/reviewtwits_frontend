import { MouseEvent } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ReactionResponseType, ReactionType } from 'typings/reviews';
import { useToggleReaction } from 'hooks/queries/sns';

interface ReactionBoxProps {
  reviewId: number;
  reactions?: ReactionResponseType;
}

const ReactionBox = ({ reviewId, reactions }: ReactionBoxProps) => {
  const { mutate: doReact } = useToggleReaction(reviewId);

  const handleClickReactButton = (e: MouseEvent<HTMLButtonElement>) => {
    const reactionType = e.currentTarget.id as ReactionType;
    doReact(reactionType);
  };

  const props = {
    reactions,
    handleReact: handleClickReactButton,
  };

  return <ReactionBoxView {...props} />;
};

interface ReactionBoxViewProps {
  reactions?: ReactionResponseType;
  handleReact: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ReactionBoxView = ({ reactions, handleReact }: ReactionBoxViewProps) => {
  if (!reactions) return null;
  return (
    <S.Box>
      {Object.keys(reactions)?.map((name, i) => (
        <S.ReactionButton
          key={i}
          id={name}
          isActive={reactions[name].isReacted}
          onClick={handleReact}
        >
          <S.ReactionCnt>{reactions[name].count}</S.ReactionCnt>
          <Image
            src={`/icons/${name.toLowerCase()}.png`}
            width="15"
            height="15"
            alt=""
          />
        </S.ReactionButton>
      ))}
    </S.Box>
  );
};

export default ReactionBox;

const S = {
  Box: styled.div`
    display: flex;
    gap: 8px;

    width: 100%;
    margin-top: 12px;
    margin-bottom: 16px;

    // 임시
    overflow-x: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  ReactionButton: styled.button<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 5px;

    border: 1px solid ${({ theme }) => theme.colors.gray_6};
    border-radius: 15px;
    padding: 4px 10px;

    ${({ theme, isActive }) => {
      if (isActive)
        return css`
          background: ${theme.colors['gray_8']};
          color: white;
        `;
    }};
  `,

  ReactionCnt: styled.span``,
};
