import { authApi } from 'api/instance';

const url = '/emails';

export const emailsAPI = {
  verifyEmail: (email: string) => {
    const params = { accountId: email };
    authApi.get(`${url}/verify`, { params }).then(({ status }) => {
      switch (status) {
        case 200:
          alert('인증 번호를 전송하였습니다.');
          break;
      }
    });
  },
};
