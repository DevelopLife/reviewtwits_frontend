import Image from 'next/image';

import styled from '@emotion/styled';
import AddReactionBox from 'components/social/feed/MainContentSection/Review/AddReactionBox';
import CommentIcon from 'public/icons/comment.svg';
import ScrapButton from 'components/social/feed/MainContentSection/Review/ScrapButton';
import { ReactionResponseType } from 'typings/reviews';
import ReactionBox from 'components/social/feed/MainContentSection/Review/ReactionBox';

interface ReactionsProps {
  reviewId: string;
  isScrapped: boolean;
  reactions: ReactionResponseType;
}

const Reactions = ({ reviewId, isScrapped, reactions }: ReactionsProps) => {
  return (
    <S.Container>
      <S.Stickers>
        <AddReactionBox reviewId={Number(reviewId)} />
        <CommentIcon />
        <ScrapButton
          isScrapped={isScrapped}
          reviewId={Number(reviewId)}
          position="static"
        />
      </S.Stickers>

      <S.ReactionBoxContainer>
        <ReactionBox reviewId={Number(reviewId)} reactions={reactions} />
      </S.ReactionBoxContainer>
    </S.Container>
  );
};
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    width: 548px;
    height: 32px;

    align-items: center;
    justify-content: space-between;

    margin-top: 24px;
  `,
  Stickers: styled.ul`
    position: relative;
    display: flex;
    gap: 8px;

    align-items: center;
    justify-content: center;

    width: 112px;
    height: 32px;
  `,
  ReactionBoxContainer: styled.div`
    display: flex;
    gap: 8px;

    margin-top: 12px;
    margin-bottom: 16px;
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

export default Reactions;
