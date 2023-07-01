import MODAL_LIST from 'constants/modal';
import { useRouter } from 'next/router';
import useModal from './useModal';

interface useRouteModalPageProps {
  nickname?: string;
  reviewId?: number;
}

const useRouteModalPage = ({ nickname, reviewId }: useRouteModalPageProps) => {
  const router = useRouter();
  const modal = useModal();

  const routeModalPage = () => {
    router.push(`${router.asPath}?userName=${nickname}&reviewId=${reviewId}`);
    modal.show({ key: MODAL_LIST.SOCIAL_FEED_DETAIL });
  };

  return routeModalPage;
};

export default useRouteModalPage;
