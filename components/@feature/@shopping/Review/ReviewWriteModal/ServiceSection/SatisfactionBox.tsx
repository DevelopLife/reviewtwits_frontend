import { useState, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import ThumbIcon from 'public/icons/thumb.svg';
import { S as ReviewWriteModalStyles } from 'components/@feature/@shopping/Review/ReviewWriteModal/ReviewWriteModal';

import theme from 'styles/theme';

const SatisfactionBox = () => {
  const [isSatisfied, setIsSatisfied] = useState<boolean | null>(null);

  const changeSatisfaction = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedButton = e.currentTarget.id;
    selectedButton === 'thumbsUp'
      ? setIsSatisfied(true)
      : setIsSatisfied(false);
  };

  return (
    <S.SatisfactionBox>
      <S.ReviewFor>만족도</S.ReviewFor>
      <S.ThumbButtonBox>
        <S.ThumbButton
          id="thumbsUp"
          type="button"
          isActive={isSatisfied === true}
          onClick={changeSatisfaction}
        >
          <ThumbIcon />
        </S.ThumbButton>
        <S.ThumbButton
          id="thumbsDown"
          type="button"
          isActive={isSatisfied === false}
          onClick={changeSatisfaction}
        >
          <ThumbIcon style={{ rotate: '180deg' }} />
        </S.ThumbButton>
      </S.ThumbButtonBox>
    </S.SatisfactionBox>
  );
};

export default SatisfactionBox;

interface ThumbButtonStyleProps {
  isActive: boolean;
}

const S = {
  ReviewFor: ReviewWriteModalStyles.ReviewFor,
  SatisfactionBox: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `,

  ThumbButtonBox: styled.div`
    display: flex;
    gap: 10px;
    height: fit-content;
  `,

  ThumbButton: styled.button<ThumbButtonStyleProps>`
    border-radius: 50%;
    background: white;
    padding: 7px 7px 4px 7px;

    border: ${({ theme }) => `1px solid ${theme.colors.gray_2}`};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    ${({ isActive }) =>
      isActive &&
      css`
        background: ${theme.colors.blue_0};

        > img {
          filter: invert();
        }
      `};
  `,
};
