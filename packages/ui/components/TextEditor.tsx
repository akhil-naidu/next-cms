import dynamic from 'next/dynamic';
import { useState } from 'react';
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null,
});

const TextEditor = () => {
  const [value, setValue] = useState('Testing State');
  return <RichTextEditor value={value} onChange={setValue} id='rte' />;
};

export default TextEditor;
