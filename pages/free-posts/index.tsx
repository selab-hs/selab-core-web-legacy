/* eslint-disable @next/next/link-passhref */
import axios from 'axios';
import Link from 'next/link';
import * as S from './style';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useContext } from 'react';
import { ThemeContext } from '../_app';
import { timeForToday } from '../../components/utils/timeForToday';
import { FreePostType } from './types';
import { GetServerSideProps } from 'next';

// TODO: 추후 삭제 예정
axios.defaults.baseURL = 'http://3.35.64.22:8080';

// TODO: 추후 삭제 예정
export const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW5icjB0aGVyQGhzLmFjLmtyIiwiaXNzIjoic2VsYWIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjUwOTU4MzIzfQ.bXy9dkOgEoN5Y-9bySizyEIjvhy-3MYpYTB7dqe1RXka81LU9EBbFEx9TG-f2ZbVNRloTfOwfeb-yduFmOyZqA';

const FreePosts = ({ freePosts }: { freePosts: FreePostType[] }) => {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <S.FreePostsWrapper>
      <S.SearchWrapper>
        <S.Search type="text" id="search" placeholder="검색" colorTheme={colorTheme} />
        <S.SearchSubmit>
          <BiSearchAlt2 size={20} cursor="pointer" />
        </S.SearchSubmit>
      </S.SearchWrapper>
      {freePosts?.length > 0 &&
        freePosts.map((data: FreePostType) => {
          return (
            <Link href={`/free-posts/${data.freePostId}`} key={data.freePostId}>
              <S.Post colorTheme={colorTheme}>
                <S.Title colorTheme={colorTheme}>{data.title}</S.Title>
                <S.Content>{data.content}</S.Content>
                <S.Detail colorTheme={colorTheme}>{`${timeForToday(data.createdAt)} • ${
                  data.memberId
                }번 작성자`}</S.Detail>
              </S.Post>
            </Link>
          );
        })}
    </S.FreePostsWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/v1/free-posts',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.data.data.freePosts);

  return { props: { freePosts: response.data.data.freePosts } };
};

export default FreePosts;