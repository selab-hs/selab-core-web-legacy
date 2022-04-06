import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { MutableRefObject, useRef } from 'react';
import * as S from './style';
import { Editor } from '@toast-ui/react-editor';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import { deviceSize } from '../../styles/mediaQuery';

export default function TuiEditor() {
  const editorRef = useRef<Editor>();

  const windowSize = useGetWindowSize();

  function handleSubmit() {
    if (!editorRef.current) return;

    const editorData = editorRef.current.getInstance().getHtml();

    console.log(editorData);
  }

  return (
    <S.Wrapper>
      <Editor
        initialValue="write post"
        ref={editorRef as MutableRefObject<Editor>}
        height="100%"
        previewStyle={windowSize > deviceSize.mobile ? 'vertical' : 'tab'}
      />
      <div onClick={handleSubmit}>전송!</div>
    </S.Wrapper>
  );
}
