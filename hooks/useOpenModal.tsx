import MODAL_LIST from 'constants/modal';
import { useRouter } from 'next/router';
import useModal from './useModal';

interface useRouteModalPageProps {
  nickname?: string;
  reviewId?: number;
  key: (typeof MODAL_LIST)[keyof typeof MODAL_LIST];
}

const useRouteModalPage = ({
  nickname,
  reviewId,
  key,
}: useRouteModalPageProps) => {
  const router = useRouter();
  const modal = useModal();

  const routeModalPage = () => {
    router.push(`${router.asPath}?userName=${nickname}&reviewId=${reviewId}`);
    modal.show({ key: key });
  };

  return routeModalPage;
};

export default useRouteModalPage;
