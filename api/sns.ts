import { api } from 'api/instance';

const SNS_URL = '/sns';

export const snsAPI = {
  createReview: async (formData: FormData) => {
    return await api.post(`${SNS_URL}/reviews`, formData);
  },
};
