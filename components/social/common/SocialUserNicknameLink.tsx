import Link from 'next/link';

import { WrapProps } from 'typings/wrapperProps';

interface SocialUserNicknameLinkProps extends WrapProps {
  nickname: string;
}

export const SocialUserNicknameLink = ({
  children,
  nickname,
}: SocialUserNicknameLinkProps) => {
  const href = `/social/user/${nickname}`;

  return <Link href={href}>{children}</Link>;
};

export default SocialUserNicknameLink;
