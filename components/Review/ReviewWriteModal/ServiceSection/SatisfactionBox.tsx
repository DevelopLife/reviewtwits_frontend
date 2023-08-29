import { useState, MouseEvent } from 'react';

import * as S from './SatisfactionBox.styles';
import ThumbIcon from 'public/icons/thumb.svg';

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
