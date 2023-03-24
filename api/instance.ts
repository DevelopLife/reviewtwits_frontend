import axios from 'axios';

import { verifyToken, verifyTokenErrorHandler } from 'utils/auth';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const mockApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    'X-AUTH-TOKEN':
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhaG4wbWluOTVAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2Nzg0NTMwODYsImV4cCI6MTY3ODQ1NjY4Nn0.kxle2cDB6WI9LPhdyluwoLE-v4EVZj1jUdjTbUTC6VI',
  },
});
export const oauthApi = axios.create();

api.interceptors.request.use(verifyToken, verifyTokenErrorHandler);
