import { AxiosInstance } from 'axios';
import { storage } from '../../components/utils';
import { SESSION_ID } from '../../components/utils/constants';

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
