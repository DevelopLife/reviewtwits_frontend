import { useRouter } from 'next/router';

import SocialMenuItem from 'components/social/common/SocialMenuItem';
import useUserProfile from 'hooks/queries/users';
import { WrapProps } from 'typings/wrapperProps';

const SocialProfileMenuItem = ({ children }: WrapProps) => {
  const userProfile = useUserProfile();
  const router = useRouter();
  const { nickname } = router.query;
  const href = `/social/user/${userProfile?.nickname}`;

  if (!userProfile?.nickname) {
    return (
      <SocialMenuItem isCurrent={false} href="">
        {children}
      </SocialMenuItem>
    );
  }

  const isMypage = nickname === userProfile?.nickname;
  return (
    <SocialMenuItem isCurrent={isMypage} href={href}>
      {children}
    </SocialMenuItem>
  );
};

export default SocialProfileMenuItem;
