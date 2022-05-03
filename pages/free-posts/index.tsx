/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as S from './style';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { FreePostType } from './types';
import { getPostsAPI } from '@apis/posts';
import { timeForToday } from '@components/utils/timeForToday';

const FreePosts = () => {
  const [freePosts, setFreePosts] = useState<FreePostType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPostsAPI();
        setFreePosts(response.data.data.freePosts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <S.FreePostsWrapper>
      <S.SearchWrapper>
        <S.Search type="text" id="search" placeholder="검색" />
        <S.SearchSubmit>
          <BiSearchAlt2 size={20} cursor="pointer" />
        </S.SearchSubmit>
      </S.SearchWrapper>
      {freePosts?.length > 0 &&
        freePosts.map((data: FreePostType) => {
          return (
            <Link href={`/free-posts/${data.freePostId}`} key={data.freePostId}>
              <S.Post>
                <S.Title>{data.title}</S.Title>
                <S.Content>{data.content}</S.Content>
                <S.Detail>{`${timeForToday(data.createdAt)} • ${data.memberId}번 작성자`}</S.Detail>
              </S.Post>
            </Link>
          );
        })}
    </S.FreePostsWrapper>
  );
};

export default FreePosts;
