import Link from 'next/link';

import type { WrapProps } from 'typings/wrapperProps';
import * as S from './SidebarTitle.styles';

interface SidebarTitleProps extends WrapProps {
  href: string;
}

const SidebarTitle = ({ children, href }: SidebarTitleProps) => {
  return (
    <S.SidebarTitle>
      <Link href={href}>{children}</Link>
    </S.SidebarTitle>
  );
};

export default SidebarTitle;
