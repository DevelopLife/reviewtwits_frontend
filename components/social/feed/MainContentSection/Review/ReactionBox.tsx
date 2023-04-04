import Image from 'next/image';
import styled from '@emotion/styled';

import { ReactionResponseType } from 'typings/reviews';

interface ReactionBoxProps {
  reactions?: ReactionResponseType[];
}

const ReactionBox = ({ reactions }: ReactionBoxProps) => {
  const props = {
    reactions,
  };

  return <ReactionBoxView {...props} />;
};

interface ReactionBoxViewProps {
  reactions?: ReactionResponseType[];
}

const ReactionBoxView = ({ reactions }: ReactionBoxViewProps) => {
  return (
    <S.Box>
      {reactions?.map((reaction: ReactionResponseType, i) => (
        <S.ReactionButton key={i}>
          <S.ReactionCnt>{reaction.count}</S.ReactionCnt>
          <Image
            src={`/icons/${reaction.reactionType.toLowerCase()}.png`}
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

  ReactionButton: styled.button`
    display: flex;
    align-items: center;
    gap: 5px;

    border: 1px solid ${({ theme }) => theme.colors.gray_6};
    border-radius: 15px;
    padding: 4px 10px;
  `,

  ReactionCnt: styled.span``,
};
