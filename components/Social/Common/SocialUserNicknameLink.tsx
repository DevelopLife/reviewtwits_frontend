import { PAGE_LIST } from 'constants/routers';
import Link from 'next/link';

import { WrapProps } from 'typings/wrapperProps';

interface SocialUserNicknameLinkProps extends WrapProps {
  nickname: string | undefined;
}

export const SocialUserNicknameLink = ({
  children,
  nickname,
}: SocialUserNicknameLinkProps) => {
  const href = `${PAGE_LIST.SOCIAL_PROFILE}/${nickname}`;

  return <Link href={href}>{children}</Link>;
};

export default SocialUserNicknameLink;
