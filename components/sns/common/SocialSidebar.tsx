import { useRouter } from 'next/router';

import SocialMenuItem from 'components/sns/common/SocialMenuItem';
import SocialMenus from 'components/sns/common/SocialMenus';
import SidebarTitle from 'components/sns/common/SidebarTitle';
import SearchBar from 'components/sns/common/SearchBar';

import HomeIcon from 'public/icons/home.svg';
import BellIcon from 'public/icons/bell.svg';
import CompassIcon from 'public/icons/compass.svg';
import FolderIcon from 'public/icons/folder.svg';
import FullHeartIcon from 'public/icons/full-heart.svg';
import UserIcon from 'public/icons/user.svg';

import theme from 'styles/theme';
import * as S from './SocialSidebar.styles';

const SERVICE_TITLE = 'ReviewTwits';

/*

TODO: social/profile이 아닌 social/user/${nickname}으로 피드페이지 url이 변경되었기 때문에 
그에 맞게 사이드바의 active 효과도 변경해주어야 합니다. useData와 nickname이 일치하는지 체크해주게 작업하면 될 것 같습니다.

*/

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
  const pathNames = router.pathname.split('/');
  const lastPathName = pathNames[pathNames.length - 1];

  return (
    <S.SidebarLayout>
      <SidebarTitle href={'/social/home'}>{SERVICE_TITLE}</SidebarTitle>
      <SearchBar />
      <SocialMenus>
        {MENUS.map(({ text, Icon }) => {
          const href = `/social/${text.toLowerCase()}`;
          const isCurrent = href === lastPathName;
          const iconColor = isCurrent
            ? theme.colors.secondary
            : theme.colors.gray_4;

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
