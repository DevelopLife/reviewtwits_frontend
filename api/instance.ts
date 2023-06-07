import axios from 'axios';

import {
  doSignOutOptionalTokenApi,
  verifyToken,
  verifyTokenErrorHandler,
} from 'utils/auth';
import { redirectErrorHandler } from 'utils/errorHandler';

export const requiredTokenApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const optionalTokenAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const publicAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

export const oauthApi = axios.create();

requiredTokenApi.interceptors.request.use(verifyToken, verifyTokenErrorHandler);
requiredTokenApi.interceptors.response.use(
  (response) => response,
  redirectErrorHandler
);

optionalTokenAPI.interceptors.request.use(
  verifyToken,
  doSignOutOptionalTokenApi
);
