import Link from 'next/link';
import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';

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

const S = {
  SidebarTitle: styled.h1`
    margin-bottom: 24px;

    & > a {
      text-decoration: none;
      font-weight: 700;
      font-size: 22px;
      cursor: pointer;

      color: ${({ theme }) => theme.colors.black};
    }
  `,
};
