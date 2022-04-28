import axios, { AxiosInstance } from 'axios';
import { authInterceptor } from './interceptors';

export const notAuthInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const authInstance = (() => {
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });
  authInterceptor(instance);
  return instance;
})();
