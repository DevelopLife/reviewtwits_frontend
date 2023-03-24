import { api, authApi } from 'api/instance';
import { ERROR_MESSAGE } from 'constants/account';
import { SighInParams, SignUpParams, UserFormType } from 'typings/account';

const url = '/users';

export const usersAPI = {
  signIn: async (values: UserFormType) => {
    const body: SighInParams = values;

    return await authApi
      .post(`${url}/login`, body)
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
    const body: SignUpParams = {
      nickname: 'test1234',
      accountId: values.accountId,
      accountPw: values.accountPw,
      birthDate: values.birthDate,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
      verifyCode: values.verifyCode,
    };

    return await authApi
      .post(`${url}/register`, body)
      .then((res) => res.data)
      .catch(({ response }) => {
        switch (response.status) {
          case 401:
            alert(response.data[0].message);
            break;
        }
      });
  },
  findUser: async (userId: string) => {
    return await authApi.get(`${url}/${userId}`).then((res) => res.data);
  },
  reissueToken: async () => {
    return await authApi
      .post(`${url}/issue/access-token`, {
        headers: {
          withCredentials: true,
        },
      })
      .then((res) => res.data);
  },
  signOut: async () => {
    return await api.post(`${url}/logout`);
  },
};
