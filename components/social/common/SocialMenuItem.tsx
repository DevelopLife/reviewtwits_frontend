import Link from 'next/link';
import styled from '@emotion/styled';

import Hover from 'components/Common/Hover';
import type { WrapProps } from 'typings/wrapperProps';
interface SocialMenuItemViewProps extends WrapProps {
  isCurrent: boolean;
  href: string;
}

const SocialMenuItem = ({
  children,
  href,
  isCurrent,
}: SocialMenuItemViewProps) => {
  return (
    <Hover>
      <S.SocialMenuItem isCurrent={isCurrent}>
        <Link href={href}>{children}</Link>
      </S.SocialMenuItem>
    </Hover>
  );
};

export default SocialMenuItem;

const S = {
  SocialMenuItem: styled.li<{ isCurrent: boolean }>`
    width: 100%;

    border-radius: 8px;
    background-color: ${({ theme, isCurrent }) =>
      isCurrent && theme.colors.secondary + '3D'};

    a {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      padding: 16px;
      gap: 16px;
      text-decoration: none;
      font-size: 20px;
      font-weight: ${({ isCurrent }) => (isCurrent ? 700 : 400)};
      color: ${({ theme, isCurrent }) =>
        isCurrent ? theme.colors.secondary : theme.colors.gray_4};
    }
  `,
};
