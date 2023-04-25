import styled from '@emotion/styled';
import { WrapProps } from 'typings/wrapperProps';
import * as S from './SocialTitleSection.styles';

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
