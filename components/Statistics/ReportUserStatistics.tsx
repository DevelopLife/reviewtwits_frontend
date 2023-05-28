import { useCallback, useEffect } from 'react';

import { getCookie, setCookie } from 'utils/cookies';
import { validateMobile } from 'utils/validate';
import { DeviceType } from 'typings/statistics';
import { statisticsAPI } from 'api/statistics';

const ReportUserStatistics = () => {
  const getVisitorInfo = () => {
    const currentUrl = location.href;
    const userAgent = navigator.userAgent;
    const device: DeviceType = validateMobile(userAgent) ? 'MOBILE' : 'PC';
    const searchRoute = document.referrer === '' ? null : document.referrer;

    return { currentUrl, device, searchRoute };
  };

  const requestVisitorInfo = useCallback(() => {
    const { currentUrl, device, searchRoute } = getVisitorInfo();

    statisticsAPI.reportVisitorInfo(currentUrl, searchRoute, device);
  }, []);

  useEffect(() => {
    const isVisited = getCookie('visited');

    if (isVisited === 'Y') return;

    requestVisitorInfo();
    setCookie('visited', 'Y', { maxAge: 60 * 60 * 24 });
  }, [requestVisitorInfo]);

  return <></>;
};

export default ReportUserStatistics;
