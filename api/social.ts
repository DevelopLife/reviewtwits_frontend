import { api } from 'api/instance';

const socialAPI = {
  getProfile: async (nickname: string) => {
    const response = await api.get(`sns/profile/${nickname}`);

    return response.data;
  },
};

export default socialAPI;
