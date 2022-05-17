import { postSinglePostAPI } from '@apis/posts';
import { Response } from '@apis/types';
import { storage } from '@components/utils';
import { CLIENT_ERROR, SERVER_ERROR } from '@constants/api-constants';
import { TEMPORARY_POST } from '@constants/posts-constants';
import { useRouter } from 'next/router';

import * as S from '../style';

const WriteTabBtns = () => {
  const router = useRouter();

  const handleBackBtn = () => {
    alert('임시저장이 완료되었습니다.');
    router.back();
  };

  const handleCreateBtn = async () => {
    const post = storage.get<{ id: string; title: string; content: string }>(TEMPORARY_POST);

    if (!post?.title?.length) return alert('제목은 필수로 입력해주세요 🚨');
    if (!post?.content?.length) return alert('내용은 필수로 입력해주세요 🚨');

    try {
      const {
        data: {
          data: { id },
        },
      } = await postSinglePostAPI(post.title, post.content);
      router.push(`/free-posts/${id}`);
      storage.remove(TEMPORARY_POST);
    } catch (e: any) {
      const response = e.response as Response;
      if (!response) return;
      const {
        status,
        data: { message, code },
      } = response;
      // console.error(message);
      // console.error(code);
      if (status >= 400) {
        return alert(CLIENT_ERROR);
      }
      if (status >= 500) {
        return alert(SERVER_ERROR);
      }
    }
  };

  return (
    <>
      <S.LeftBtn currentTab={2} onClick={handleBackBtn}>
        뒤로가기
      </S.LeftBtn>
      <S.RightBtn onClick={handleCreateBtn}>작성하기</S.RightBtn>
    </>
  );
};
export default WriteTabBtns;
