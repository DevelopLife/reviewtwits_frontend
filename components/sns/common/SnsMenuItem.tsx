import Hover from 'components/common/Hover';
import Link from 'next/link';
import { WrapProps } from 'typings/wrapperProps';
import * as S from './SnsLayout.styles';

interface SnsMenuItemViewProps extends WrapProps {
  isCurrent: boolean;
  href: string;
}

const SnsMenuItem = ({ children, href, ...rest }: SnsMenuItemViewProps) => {
  return (
    <Hover>
      <S.SnsMenuItem {...rest}>
        <Link href={href}>{children}</Link>
      </S.SnsMenuItem>
    </Hover>
  );
};

export default SnsMenuItem;
