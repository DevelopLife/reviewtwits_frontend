import { api } from 'api/instance';
import { ERROR_MESSAGE } from 'constants/account';
import { SighInParams, SignUpParams, UserFormType } from 'typings/account';

const url = '/users';

export const usersAPI = {
  signUp: async (values: UserFormType) => {
    const body: SignUpParams = {
      nickname: 'test1',
      accountId: values.accountId,
      accountPw: values.accountPw,
      birthDate: values.birthDate,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
      verifyCode: values.verifyCode,
    };

    return await api
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
    return await api.get(`${url}/${userId}`).then((res) => res.data);
  },
};
