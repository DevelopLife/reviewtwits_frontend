import { useRouter } from 'next/router';

import SocialMenuItem from 'components/social/common/SocialMenuItem';
import SocialMenus from 'components/social/common/SocialMenus';
import SocialProfileMenuItem from 'components/social/common/SocialProfileMenuItem';
import SidebarTitle from 'components/social/common/SidebarTitle';
import SearchBar from 'components/social/common/SearchBar';

import HomeIcon from 'public/icons/home.svg';
import BellIcon from 'public/icons/bell.svg';
import CompassIcon from 'public/icons/compass.svg';
import FolderIcon from 'public/icons/folder.svg';
import FullHeartIcon from 'public/icons/full-heart.svg';
import UserIcon from 'public/icons/user.svg';

import theme from 'styles/theme';
import * as S from './SocialSidebar.styles';

const SERVICE_TITLE = 'ReviewTwits';

const MENUS = [
  { text: 'Home', Icon: HomeIcon },
  { text: 'Notifications', Icon: BellIcon },
  { text: 'Explore', Icon: CompassIcon },
  { text: 'Create', Icon: FolderIcon },
  { text: 'Follower', Icon: FullHeartIcon },
  { text: 'Profile', Icon: UserIcon },
];

const SnsSidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <S.SidebarLayout>
      <SidebarTitle href="/social/home">{SERVICE_TITLE}</SidebarTitle>
      <SearchBar />
      <SocialMenus>
        {MENUS.map(({ text, Icon }) => {
          const href = `/social/${text.toLowerCase()}`;
          const isCurrent = href === pathname;
          const iconColor = isCurrent
            ? theme.colors.secondary
            : theme.colors.gray_4;

          if (text === 'Profile') {
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
