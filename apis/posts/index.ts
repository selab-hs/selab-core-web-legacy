import { authInstance } from '../config/createInstance';
import { GetPostsAPIResponse, getSinglePostAPIResponse, postSinglePostAPIResponse } from './types';

export const getPostsAPI = async () =>
  await authInstance.get<GetPostsAPIResponse>('/api/v1/free-posts');

export const getSinglePostAPI = async (id: string) =>
  await authInstance.get<getSinglePostAPIResponse>(`/api/v1/free-posts/${id}`);

export const postSinglePostAPI = async (title: string, content: string) =>
  await authInstance.post<postSinglePostAPIResponse>('/api/v1/free-posts', { title, content });
