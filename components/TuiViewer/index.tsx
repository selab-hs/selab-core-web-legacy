import React, { useEffect, useState } from 'react';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-cpp.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-xml-doc.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-kotlin.js';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

interface PostData {
  id: number;
  titleData: string;
  editorData: string;
}

const TuiEditor = () => {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    const postData = localStorage.getItem('post');

    const parsedPostData = postData ? JSON.parse(postData) : null;

    setData(parsedPostData);
  }, []);

  return (
    <>
      {data && (
        <Viewer
          initialValue={data.editorData}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
      )}
    </>
  );
};

export default TuiEditor;
