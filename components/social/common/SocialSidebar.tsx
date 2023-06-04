import { useRouter } from 'next/router';

import SocialMenuItem from 'components/social/common/SocialMenuItem';
import SocialMenus from 'components/social/common/SocialMenus';
import SocialProfileMenuItem from 'components/social/common/SocialProfileMenuItem';
import SidebarTitle from 'components/social/common/SidebarTitle';
import SearchBar from 'components/social/common/SearchBar';

import HomeIcon from 'public/icons/home.svg';
import FolderIcon from 'public/icons/folder.svg';
import FullHeartIcon from 'public/icons/full-heart.svg';
import UserIcon from 'public/icons/user.svg';

import theme from 'styles/theme';
import * as S from './SocialSidebar.styles';
import { PAGE_LIST } from 'constants/routers';

const SERVICE_TITLE = 'ReviewTwits';

const SOCIAL_URL = '/social';
const USER_FEED_URL = `${SOCIAL_URL}/user`;

const MENUS = [
  { href: `${PAGE_LIST.SOCIAL_HOME}`, text: 'Home', Icon: HomeIcon },
  { href: `${PAGE_LIST.SOCIAL_CREATE}`, text: 'Create', Icon: FolderIcon },
  { href: `${SOCIAL_URL}/follower`, text: 'Follower', Icon: FullHeartIcon },
  { href: USER_FEED_URL, text: 'Profile', Icon: UserIcon },
];

const SnsSidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <S.SidebarLayout>
      <SidebarTitle href={PAGE_LIST.SOCIAL_HOME}>{SERVICE_TITLE}</SidebarTitle>
      <SearchBar />
      <SocialMenus>
        {MENUS.map(({ href, text, Icon }) => {
          const isCurrent = href === pathname;
          const iconColor = isCurrent
            ? theme.colors.secondary
            : theme.colors.gray_4;

          if (href === USER_FEED_URL) {
            return (
              <SocialProfileMenuItem key={text}>
                <>
                  <Icon fill={iconColor} />
                  {text}
                </>
              </SocialProfileMenuItem>
            );
          }

          return (
            <SocialMenuItem key={text} isCurrent={isCurrent} href={href}>
              {
                <>
                  <Icon fill={iconColor} />
                  {text}
                </>
              }
            </SocialMenuItem>
          );
        })}
      </SocialMenus>
    </S.SidebarLayout>
  );
};

export default SnsSidebar;
