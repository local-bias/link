import React, { FC } from 'react';

const Component: FC = () => (
  <div className='fixed left-0 top-0 w-screen h-screen overflow-hidden bg-blue-50'>
    {/* <img src='/img/background4.jpg' className='w-screen h-screen' alt='背景' /> */}
    <div className='absolute left-[15vw] top-[30%] rounded-full w-[40vmin] h-[40vmin] animate-float bg-blue-100 bg-gradient-to-tr from-teal-100 to-blue-100'></div>
    <div className='absolute right-[20vw] bottom-[-10%] w-[40vmin] h-[40vmin] rotate-45 animate-float2 bg-blue-100 bg-gradient-to-tr from-teal-100 to-blue-100'></div>
    <div className='absolute right-[20vw] top-[10%] w-[30vmin] h-[45vmin] rotate-45 clip-path-polygon-[0_0,_0%_100%,_100%_50%] animate-float4 bg-blue-100 bg-gradient-to-br from-teal-100 to-blue-100'></div>
  </div>
);

export default Component;
