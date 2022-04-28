import { FreePostType } from '../../pages/free-posts/types';

export interface GetPostsAPIResponse {
  data: {
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    sort: string;
    freePosts: FreePostType[];
  };
}

export interface getSinglePostAPIResponse {
  data: FreePostType;
}

export interface postSinglePostAPIResponse {
  data: {
    id: number;
  };
}
