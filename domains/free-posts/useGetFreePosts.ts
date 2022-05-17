import React, { useEffect, useState } from 'react';

import { getPostsAPI } from '@apis/posts';
import { Response } from '@apis/types';
import { CLIENT_ERROR, SERVER_ERROR } from '@constants/api-constants';
import { FreePostType } from './types';

export const useGetFreePosts = () => {
  const [freePosts, setFreePosts] = useState<FreePostType[] | null>(null);

  const callApi = async () => {
    try {
      const {
        data: {
          data: { freePosts },
        },
      } = await getPostsAPI();
      setFreePosts(freePosts);
    } catch (e: any) {
      const response = e.response as Response;
      if (!response) return;

      const {
        status,
        data: { message, code },
      } = response;
      // console.error(message);
      // console.error(code);

      if (status >= 400) return alert(CLIENT_ERROR);
      if (status >= 500) return alert(SERVER_ERROR);
    }
  };

  useEffect(() => {
    callApi();
  }, []);
  return freePosts;
};
