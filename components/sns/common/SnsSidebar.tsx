import { useRouter } from 'next/router';

import SnsMenuItem from 'components/sns/common/SnsMenuItem';
import SnsMenus from 'components/sns/common/SnsMenus';

import HomeIcon from 'public/icons/home.svg';
import BellIcon from 'public/icons/bell.svg';
import CompassIcon from 'public/icons/compass.svg';
import FolderIcon from 'public/icons/folder.svg';
import FullHeartIcon from 'public/icons/full-heart.svg';
import UserIcon from 'public/icons/user.svg';

import * as S from './SnsLayout.styles';
import Image from 'next/image';
import SidebarTitle from 'components/sns/common/SidebarTitle';
import theme from 'styles/theme';

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
  const pathNames = router.pathname.split('/');
  const lastPathName = pathNames[pathNames.length - 1];

  return (
    <S.SnsSidebarLayout>
      <SidebarTitle href={'home'}>{SERVICE_TITLE}</SidebarTitle>
      <SnsMenus>
        {MENUS.map(({ text, Icon }) => {
          const href = text.toLowerCase();
          const isCurrent = href === lastPathName;
          const iconColor = isCurrent
            ? theme.colors.black
            : theme.colors.gray_4;

          return (
            <SnsMenuItem key={text} isCurrent={isCurrent} href={href}>
              {
                <>
                  <Icon fill={iconColor} />
                  {text}
                </>
              }
            </SnsMenuItem>
          );
        })}
      </SnsMenus>
    </S.SnsSidebarLayout>
  );
};

export default SnsSidebar;
