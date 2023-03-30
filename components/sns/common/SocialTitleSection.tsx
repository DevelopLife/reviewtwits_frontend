import { WrapProps } from 'typings/wrapperProps';
import * as S from './SnsLayout.styles';

interface SocialTitleSectionProps extends WrapProps {
  title?: string;
}

const SocialTitleSection = ({ title, children }: SocialTitleSectionProps) => {
  return (
    <S.SocialTitleSection>
      {title && <S.SocialContentTitle>{title}</S.SocialContentTitle>}
      {children}
    </S.SocialTitleSection>
  );
};

export default SocialTitleSection;
