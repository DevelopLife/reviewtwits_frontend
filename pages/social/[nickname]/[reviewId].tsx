/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import SNSExplorePage from '../home/index';
import SocialUserFeedPage from '../user/[nickname]';
import useModal from 'hooks/useModal';
import MODAL_LIST from 'constants/modal';
import { useEffect } from 'react';

const ReviewModalPage = () => {
  const route = useRouter();
  const modal = useModal();

  const storage = globalThis?.sessionStorage;
  const lastpath = storage.prevPath.split('/').at(-1);

  useEffect(() => {
    modal.show({ key: MODAL_LIST.SOCIAL_FEED_DETAIL });
  }, [modal, route.pathname, route.query]);

  if (storage.prevPath.split('/').includes('home') && lastpath === 'home') {
    return <SNSExplorePage />;
  } else if (storage.prevPath.split('/').includes('user')) {
    return <SocialUserFeedPage />;
  }
  return <div>값이 없습니다</div>;
};

export default ReviewModalPage;
