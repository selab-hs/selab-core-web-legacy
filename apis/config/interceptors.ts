import { SESSION_ID } from '@constants/user-constants';
import { AxiosInstance } from 'axios';
import { storage } from '../../components/utils';

export const authInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers = {
        Authorization: `Bearer ${storage.get(SESSION_ID) || ''}`,
      };
      return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    },
  );
};
