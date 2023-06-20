import MODAL_LIST from 'constants/modal';
import { useRouter } from 'next/router';
import useModal from './useModal';
import { PAGE_LIST } from 'constants/routers';

type ValueOf<T> = T[keyof T];

interface useRouteModalPageProps {
  nickname?: string;
  reviewId?: number;
  page: ValueOf<typeof PAGE_LIST>;
}

const useRouteModalPage = ({
  nickname,
  reviewId,
  page,
}: useRouteModalPageProps) => {
  const router = useRouter();
  const modal = useModal();

  const routeModalPage = () => {
    router.push(`${page}?userName=${nickname}&reviewId=${reviewId}`);
    modal.show({ key: MODAL_LIST.SOCIAL_FEED_DETAIL });
  };

  return routeModalPage;
};

export default useRouteModalPage;
