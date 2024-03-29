import { FindIdType, FindPasswordType } from './../typings/account';
import { authApi } from 'api/instance';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from 'constants/account';

const url = '/emails';

export const emailsAPI = {
  verifyEmail: async (email: string) => {
    const params = { accountId: email };

    return await authApi
      .get(`${url}/verify`, { params })
      .then(({ status }) => {
        switch (status) {
          case 200:
            alert(SUCCESS_MESSAGE.SIGN_UP.VERIFY_CODE);
            break;
        }

        return { ok: true };
      })
      .catch(() => {
        alert(ERROR_MESSAGE.SIGN_UP.VERIFY_CODE);

        return { ok: false };
      });
  },

  findIds: async (findIdParams: FindIdType) => {
    const params = findIdParams;
    const { data } = await authApi.post(`${url}/find-ids`, params);
    return data;
  },

  findPasswords: async (findPasswordParams: FindPasswordType) => {
    const params = findPasswordParams;
    const { status } = await authApi.post(`${url}/find-password`, params);
    return status;
  },
};
