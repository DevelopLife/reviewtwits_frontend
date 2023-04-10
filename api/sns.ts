import { api } from 'api/instance';
import { SocialProfile, SocialReview } from 'typings/social';

const SNS_URL = '/sns';

export const snsAPI = {
  createReview: async (formData: FormData) => {
    return await api.post(`${SNS_URL}/reviews`, formData);
  },
  getProfile: async (nickname: string): Promise<SocialProfile> => {
    const response = await api.get(`${SNS_URL}/profile/${nickname}`);

    return response.data;
  },
  getMyReviews: async (nickname: string): Promise<SocialReview[]> => {
    const response = await api.get(`${SNS_URL}/profile/reviews/${nickname}`);

    return response.data;
  },
};
