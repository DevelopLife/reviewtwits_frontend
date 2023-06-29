import { useMutation, useQuery } from '@tanstack/react-query';
import { usersAPI } from 'api/users';
import { UserProfileResponseType } from 'typings/account';

import { isLoginState } from 'states/isLogin';
import { useRecoilValue } from 'recoil';
import { queryKey } from 'hooks/queries';

export const useUserProfile = () => {
  const isLogin = useRecoilValue(isLoginState);
  const { data: userData } = useQuery<UserProfileResponseType>(
    queryKey.myProfile(isLogin),
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

export const useSetUserProfile = (afterSuccess: (newname: string) => void) => {
  const mutate = useMutation(
    (data: FormData) => usersAPI.setUserProfile(data),
    {
      onSuccess: ({ data }) => {
        afterSuccess(data.nickname);
      },
      onError: ({ response }) => {
        alert(response?.data[0]?.message);
      },
    }
  );
  return mutate;
};
