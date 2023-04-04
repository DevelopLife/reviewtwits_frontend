import Hover from 'components/common/Hover';
import Link from 'next/link';

import type { WrapProps } from 'typings/wrapperProps';
import * as S from './SocialMenuItem.styles';

interface SocialMenuItemViewProps extends WrapProps {
  isCurrent: boolean;
  href: string;
}

const SocialMenuItem = ({
  children,
  href,
  ...rest
}: SocialMenuItemViewProps) => {
  return (
    <Hover>
      <S.SocialMenuItem {...rest}>
        <Link href={href}>{children}</Link>
      </S.SocialMenuItem>
    </Hover>
  );
};

export default SocialMenuItem;
