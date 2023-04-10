import axios from 'axios';

import { verifyToken, verifyTokenErrorHandler } from 'utils/auth';
import { redirectErrorHandler } from 'utils/errorHandler';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const oauthApi = axios.create();

api.interceptors.request.use(verifyToken, verifyTokenErrorHandler);
api.interceptors.response.use((response) => response, redirectErrorHandler);
