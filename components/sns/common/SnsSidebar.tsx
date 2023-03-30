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

const SERVICE_TITLE = 'ReviewTwits';

const MENUS = [
  { text: 'Home', icon: HomeIcon },
  { text: 'Notifications', icon: BellIcon },
  { text: 'Explore', icon: CompassIcon },
  { text: 'Create', icon: FolderIcon },
  { text: 'Follower', icon: FullHeartIcon },
  { text: 'Profile', icon: UserIcon },
];

const SnsSidebar = () => {
  const router = useRouter();
  const pathNames = router.pathname.split('/');
  const lastPathName = pathNames[pathNames.length - 1];

  return (
    <S.SnsSidebarLayout>
      <SidebarTitle href={'home'}>{SERVICE_TITLE}</SidebarTitle>
      <SnsMenus>
        {MENUS.map(({ text, icon }) => {
          const href = text.toLowerCase();
          return (
            <SnsMenuItem
              key={text}
              isCurrent={href === lastPathName}
              href={href}
            >
              {
                <>
                  <Image src={icon} width={22} height={22} alt={'icon'} />
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
