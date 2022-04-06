import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { MutableRefObject, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';

export default function TuiEditor() {
  const editorRef = useRef<Editor>();

  function handleSubmit() {
    if (!editorRef.current) return;

    const editorData = editorRef.current.getInstance().getHtml();

    console.log(editorData);
  }

  return (
    <>
      <Editor
        initialValue="write post"
        ref={editorRef as MutableRefObject<Editor>}
        height="100%"
        previewStyle="vertical"
      />
      <div onClick={handleSubmit}>전송!</div>
    </>
  );
}
