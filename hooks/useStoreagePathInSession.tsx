import { useRouter } from 'next/router';
import React from 'react';

const useStoreagePathInSession = () => {
  const router = useRouter();

  const { pathname } = router;

  if (pathname === '/social/[nickname]/[reviewId]') return;
  const storage = globalThis?.sessionStorage;
  storage?.setItem('prevPath', pathname);
  return <div></div>;
};

export default useStoreagePathInSession;
