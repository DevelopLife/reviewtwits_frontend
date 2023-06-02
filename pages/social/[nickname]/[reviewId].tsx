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

  window.addEventListener('popstate', () => {
    modal.hide();
  });

  useEffect(() => {
    modal.show({ key: MODAL_LIST.SOCIAL_FEED_DETAIL });
  }, [modal, route.pathname, route.query]);

  let backgroundPage = <div>값이 없습니다</div>;

  if (storage.prevPath.split('/').includes('home') && lastpath === 'home') {
    backgroundPage = <SNSExplorePage />;
  } else if (storage.prevPath.split('/').includes('user')) {
    backgroundPage = <SocialUserFeedPage />;
  }
  return backgroundPage;
};

export default ReviewModalPage;
