import { Button } from '@mantine/core';

import dynamic from 'next/dynamic';
const EditorJS = dynamic(() => import('./Editor'), {
  ssr: false,
  loading: () => null,
});

const Test = () => {
  return (
    <div className='bg-gray-100 min-h-screen container m-auto'>
      {/* <EditorJS /> */}
    </div>
  );
};

export default Test;
