import { useRouter } from 'next/router';

import SocialMenuItem from 'components/social/common/SocialMenuItem';
import useUserProfile from 'hooks/queries/users';
import { WrapProps } from 'typings/wrapperProps';

const SocialProfileMenuItem = ({ children }: WrapProps) => {
  const userProfile = useUserProfile();
  const router = useRouter();
  const { nickname } = router.query;
  const notLoginedHref = '/sign-in';
  const loginedHref = `/social/user/${userProfile?.nickname}`;

  if (!userProfile?.nickname) {
    return (
      <SocialMenuItem isCurrent={false} href={notLoginedHref}>
        {children}
      </SocialMenuItem>
    );
  }

  const isMypage = nickname === userProfile?.nickname;
  return (
    <SocialMenuItem isCurrent={isMypage} href={loginedHref}>
      {children}
    </SocialMenuItem>
  );
};

export default SocialProfileMenuItem;
