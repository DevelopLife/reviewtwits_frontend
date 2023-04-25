import { useQuery } from '@tanstack/react-query';
import { usersAPI } from 'api/users';
import { UserProfileResponseType } from 'typings/account';

import { isLoginState } from 'states/isLogin';
import { useRecoilValue } from 'recoil';

const USER_PROFILE_QUERY = 'userProfile';

const useUserProfile = () => {
  const isLogin = useRecoilValue(isLoginState);
  const { data: userData } = useQuery<UserProfileResponseType>(
    [USER_PROFILE_QUERY, isLogin],
    usersAPI.getUserProfile,
    {
      enabled: !!isLogin,
    }
  );

  return {
    isLogin,
    profileImageUrl: userData?.profileImageUrl,
    nickname: userData?.nickname,
    introduceText: userData?.introduceText,
    accountId: userData?.accountId,
    birthDate: userData?.birthDate,
    gender: userData?.gender,
    phoneNumber: userData?.phoneNumber,
  };
};

export default useUserProfile;