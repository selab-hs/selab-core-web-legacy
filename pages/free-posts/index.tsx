/* eslint-disable @next/next/link-passhref */
import axios, { AxiosRequestConfig } from 'axios';
import Link from 'next/link';
import * as S from './style';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../_app';
import { timeForToday } from '../../components/utils/timeForToday';
import { FreePostType } from './types';

axios.defaults.baseURL = 'http://3.35.64.22:8080';

const config: AxiosRequestConfig = {
  method: 'get',
  url: '/api/v1/free-posts',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW5icjB0aGVyQGhzLmFjLmtyIiwiaXNzIjoic2VsYWIiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjUwNjM0MzM3fQ.tdV2Mgxh-hzoxvgpdylCmnE0cH-vIiqE4YepBWb0pW49ym167gH0p4Yfa07IW0cwNbKXUL4OwxNluOMyO55sqA',
  },
};

const FreePosts = () => {
  const [freePosts, setFreePosts] = useState<FreePostType[]>([]);
  const { colorTheme } = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(config);
        setFreePosts(response.data.freePosts);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <S.FreePostsWrapper>
      <S.SearchWrapper>
        <S.Search type="text" id="search" placeholder="검색" colorTheme={colorTheme} />
        <S.SearchSubmit>
          <BiSearchAlt2 size={20} cursor="pointer" />
        </S.SearchSubmit>
      </S.SearchWrapper>
      {freePosts.length > 0 &&
        freePosts.map((data, index) => {
          return (
            <Link href={`/free-posts/${index + 1}`} key={data.freePostId}>
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

export default FreePosts;
