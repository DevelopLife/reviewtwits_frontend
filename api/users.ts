import { authApi, optionalTokenAPI, requiredTokenApi } from 'api/instance';
import { ERROR_MESSAGE } from 'constants/account';
import { SighInParams, SignUpParams, UserFormType } from 'typings/account';

const USERS_URL = '/users';

export const usersAPI = {
  signIn: async (values: UserFormType) => {
    const body: SighInParams = values;

    return await authApi
      .post(`${USERS_URL}/login`, body)
      .then((res) => res.data)
      .catch(({ response }) => {
        switch (response?.status) {
          case 401:
            alert(ERROR_MESSAGE.SIGN_IN);
            break;
        }
      });
  },
  signUp: async (values: UserFormType) => {
    const body: SignUpParams = values;

    return await authApi
      .post(`${USERS_URL}/register`, body)
      .then((res) => res.data)
      .catch(({ response }) => {
        alert(response?.data[0]?.message);
      });
  },
  findUser: async (userId: string) => {
    return await authApi.get(`${USERS_URL}/${userId}`).then((res) => res.data);
  },
  reissueToken: async () => {
    return await authApi
      .post(`${USERS_URL}/issue/access-token`, {
        headers: {
          withCredentials: true,
        },
      })
      .then((res) => res.data);
  },
  signOut: async () => {
    return await optionalTokenAPI.post(`${USERS_URL}/logout`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  setUserProfile: async (data: FormData) => {
    return await requiredTokenApi.post(`${USERS_URL}/register-addition`, data);
  },
  getUserProfile: async () => {
    return await requiredTokenApi
      .get(`${USERS_URL}/me`)
      .then((res) => res.data);
  },
};
