import { authApi } from 'api/instance';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from 'constants/account';

const url = '/emails';

export const emailsAPI = {
  verifyEmail: (email: string) => {
    const params = { accountId: email };
    authApi
      .get(`${url}/verify`, { params })
      .then(({ status }) => {
        switch (status) {
          case 200:
            alert(SUCCESS_MESSAGE.SIGN_UP.VERIFY_CODE);
            break;
        }
      })
      .catch(() => {
        alert(ERROR_MESSAGE.SIGN_UP.VERIFY_CODE);
      });
  },
};
