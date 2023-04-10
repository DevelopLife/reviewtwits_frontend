import { api } from 'api/instance';
import { SocialReview } from 'typings/social';

const socialAPI = {
  getProfile: async (nickname: string) => {
    const response = await api.get(`sns/profile/${nickname}`);

    return response.data;
  },
  getMyReviews: async (nickname: string): Promise<SocialReview[]> => {
    const response = await api.get(`sns/profile/reviews/${nickname}`);

    return response.data;
  },
};

export default socialAPI;
