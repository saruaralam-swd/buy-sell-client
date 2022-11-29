import React from 'react';

const Loading = () => {
  return (
    <div>
      <div className='h-[500px] flex items-center justify-center'>
        <progress className="progress w-40"></progress>
      </div>
    </div>
  );
};

export default Loading;