import Image from 'next/image';

import * as S from './SatisfactionBox.styles';
import ThumbIcon from 'public/images/thumb_icon.svg';

const SatisfactionBox = () => {
  return (
    <S.SatisfactionBox>
      <S.ReviewFor>만족도</S.ReviewFor>
      <S.ThumbButtonBox>
        <S.ThumbsUpButton>
          <Image width={30} height={30} src={ThumbIcon} alt="" />
        </S.ThumbsUpButton>
        <S.ThumbsDownButton>
          <Image width={30} height={30} src={ThumbIcon} alt="" />
        </S.ThumbsDownButton>
      </S.ThumbButtonBox>
    </S.SatisfactionBox>
  );
};

export default SatisfactionBox;
