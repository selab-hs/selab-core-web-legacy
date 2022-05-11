import { FreePostType } from '@pages/free-posts/types';

export interface Props extends Pick<FreePostType, 'memberId' | 'createdAt'> {}
