import axios from 'axios';

import { verifyToken, verifyTokenErrorHandler } from 'utils/auth';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export const oauthApi = axios.create();

api.interceptors.request.use(verifyToken, verifyTokenErrorHandler);
