import { useEffect } from 'react';

import { getCookie, setCookie } from 'utils/cookies';
import { validateMobile } from 'utils/validate';

const ReportUserStatistics = () => {
  const getVisitorInfo = () => {
    const userAgent = navigator.userAgent;
    const device = validateMobile(userAgent) ? 'MOBILE' : 'PC';
    const searchRoute = document.referrer;

    return { device, searchRoute };
  };

  useEffect(() => {
    const isVisited = getCookie('visited');

    if (isVisited === 'Y') return;

    const { device, searchRoute } = getVisitorInfo();

    // Request

    setCookie('visited', 'Y', { maxAge: 60 * 60 * 24 });
  }, []);

  return <></>;
};

export default ReportUserStatistics;
