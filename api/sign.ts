import { api } from 'api/instance';
import { SighInParams, SignUpParams } from 'typings/account';

export const signAPI = {
  signIn: (params: SighInParams) => {
    return api.post('/user/login', params);
  },
  signUp: (params: SignUpParams) => {
    return api.post('/user', params);
  },
};
