import styled from '@emotion/styled';

import { WrapProps } from 'typings/wrapperProps';

interface SocialTitleSectionProps extends WrapProps {
  title?: string;
}

const SocialTitleSection = ({ title, children }: SocialTitleSectionProps) => {
  return (
    <S.SocialTitleSection>
      {title && <S.SocialContentTitle>{title}</S.SocialContentTitle>}
      <S.SocialContentFlex>{children}</S.SocialContentFlex>
    </S.SocialTitleSection>
  );
};

export default SocialTitleSection;

const S = {
  SocialTitleSection: styled.div`
    width: 100%;
  `,
  SocialContentTitle: styled.h1`
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 36px;
  `,

  SocialContentFlex: styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
};
