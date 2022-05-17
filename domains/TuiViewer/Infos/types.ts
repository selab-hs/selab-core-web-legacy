import { FreePostType } from '@domains/free-posts/types';

export interface Props extends Pick<FreePostType, 'memberId' | 'createdAt'> {}
