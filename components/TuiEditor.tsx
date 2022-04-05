import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { MutableRefObject, useRef } from 'react';

export default function SetTuiEditor() {
  const editorRef = useRef<Editor>();
  //뭐가 들어올지 몰라서 제네릭 안에 ??을 명시함

  function handleSubmit() {
    if (!editorRef.current) return;

    // const editorData = editorRef.current.getInstance().getHtml();

    // console.log(editorData);
  }

  return (
    <>
      <Editor
        initialValue="write post"
        initialEditType="wysiwyg"
        ref={editorRef as MutableRefObject<Editor>}
      />
      <div onClick={handleSubmit}>전송!</div>
    </>
  );
}
