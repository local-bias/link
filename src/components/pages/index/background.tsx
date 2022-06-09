import React, { FC } from 'react';

const Component: FC = () => (
  <div className='absolute left-0 top-0 w-screen h-screen overflow-hidden bg-blue-50'>
    {/* <img src='/img/background4.jpg' layout='fill' className="w-screen h-screen" alt="背景" /> */}
    <div className='absolute left-[20vw] top-[30%] rounded-full w-[30vmin] h-[30vmin] animate-float bg-blue-100'></div>
    <div className='absolute right-[20vw] bottom-[10%] w-[30vmin] h-[30vmin] rotate-45 animate-float2 bg-blue-100'></div>
    <div className='absolute right-[20vw] top-[10%] w-[30vmin] h-[45vmin] rotate-45 clip-path-polygon-[0_0,_0%_100%,_100%_50%] animate-float4 bg-blue-100'></div>
  </div>
);

export default Component;
