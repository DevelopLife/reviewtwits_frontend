import { useRouter } from 'next/router';

import SocialMenuItem from 'components/@feature/@social/Common/SocialMenuItem';
import { useUserProfile } from 'hooks/queries/users';
import { WrapProps } from 'typings/wrapperProps';
import { PAGE_LIST } from 'constants/routers';

const SocialProfileMenuItem = ({ children }: WrapProps) => {
  const userProfile = useUserProfile();
  const router = useRouter();
  const { nickname } = router.query;
  const notLoginedHref = PAGE_LIST.SIGN_IN;
  const loginedHref = `${PAGE_LIST.SOCIAL_PROFILE}/${userProfile?.nickname}`;

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
