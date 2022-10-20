import React from 'react';
import EditorJS from '@editorjs/editorjs';

const Editor = () => {
  const configuration = {
    holder: 'editorjs',
  };

  new EditorJS(configuration);
  return <div id='editorjs'></div>;
};

export default Editor;
