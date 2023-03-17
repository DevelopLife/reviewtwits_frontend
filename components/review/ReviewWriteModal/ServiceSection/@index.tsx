import Image from 'next/image';

import * as S from '../ServiceSection.styles';
import ThumbIcon from 'public/images/thumb_icon.svg';
import ServiceQuestionBox from './ServiceQuestionBox';

const ServiceSection = () => {
  return (
    <S.Section>
      <ServiceQuestionBox />
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
    </S.Section>
  );
};

export default ServiceSection;
