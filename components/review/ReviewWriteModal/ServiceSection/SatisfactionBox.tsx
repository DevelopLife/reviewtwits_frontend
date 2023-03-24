import { useState, MouseEvent } from 'react';
import Image from 'next/image';

import * as S from './SatisfactionBox.styles';
import ThumbIcon from 'public/images/thumb_icon.svg';

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
          <Image width={30} height={30} src={ThumbIcon} alt="" />
        </S.ThumbButton>
        <S.ThumbButton
          id="thumbsDown"
          type="button"
          isActive={isSatisfied === false}
          onClick={changeSatisfaction}
        >
          <Image
            color="white"
            width={30}
            height={30}
            src={ThumbIcon}
            alt=""
            style={{ rotate: '180deg' }}
          />
        </S.ThumbButton>
      </S.ThumbButtonBox>
    </S.SatisfactionBox>
  );
};

export default SatisfactionBox;
