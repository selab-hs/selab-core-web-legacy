import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getSinglePostAPI } from '@apis/posts';
import { Response } from '@apis/types';
import { CLIENT_ERROR, SERVER_ERROR } from '@constants/api-constants';
import { FreePostType } from '@pages/free-posts/types';

export const useLoadFreePost = () => {
  const router = useRouter();
  const [freePost, setFreePost] = useState<FreePostType | null>(null);

  const callApi = async () => {
    try {
      const {
        data: { data },
      } = await getSinglePostAPI(router.query.id as string);
      setFreePost(data);
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
  }, [router.query.id]);

  return freePost;
};
