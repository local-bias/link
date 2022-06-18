import React, { FC } from 'react';
import { website } from 'src/static/website';

import Social from './social';

const Component: FC = () => (
  <div className='flex justify-center items-center h-screen'>
    <div className='shadow-xl backdrop-blur-lg border-white max-w-screen-md w-[1024px] min-h-screen md:min-h-[80vh] bg-white bg-opacity-20 py-8 px-4 md:px-8 rounded-sm'>
      <div className='mb-8'>
        <div className='flex justify-center items-center'>
          <img
            className='w-48 h-48'
            src='/img/avatar_800x800.webp'
            alt={`${website.author.name}のアイコン`}
          />
        </div>
        <div>
          <div className='text-center'>{website.author.name}</div>
          <div className='text-center'>{website.author.description}</div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {website.author.links.map((link, i) => (
          <a
            key={i}
            target='_blank'
            rel='noopener'
            className='shadow-md hover:shadow-lg rounded-sm border-[0.5px] border-white backdrop-blur-md transition text-center cursor-pointer py-5 px-8'
            href={link.url}
          >
            {link.label}
          </a>
        ))}
      </div>
      <Social />
    </div>
  </div>
);

export default Component;
