import { useRouter } from 'next/router';

const useRouteModalPage = (nickname?: string, reviewId?: number) => {
  const router = useRouter();

  const routeModalPage = () => {
    router.push(`/social/${nickname}/${reviewId}`);
  };

  return routeModalPage;
};

export default useRouteModalPage;
