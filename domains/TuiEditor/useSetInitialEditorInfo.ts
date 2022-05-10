import { storage } from '@components/utils';
import { TEMPORARY_POST } from '@constants/posts-constants';
import { Editor } from '@toast-ui/react-editor';
import { MutableRefObject, useEffect } from 'react';

export const useSetInitialEditorInfo = (
  titleRef: MutableRefObject<HTMLInputElement | null>,
  editorRef: MutableRefObject<Editor | null>,
) => {
  useEffect(() => {
    if (!editorRef.current || !titleRef.current) return;

    const savedPost = storage.get<{ id: string; title: string; content: string }>(TEMPORARY_POST);
    const content = savedPost ? savedPost.content : '';
    const title = savedPost ? savedPost.title : '';

    titleRef.current.value = title;
    editorRef.current.getInstance().setMarkdown(content);
  }, []);
};
