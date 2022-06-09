import React, { FC } from 'react';
import { GitHubIcon } from 'src/components/ui/icon/github';
import { TwitterIcon } from 'src/components/ui/icon/twitter';
import { ZennIcon } from 'src/components/ui/icon/zenn';
import { website } from 'src/static/website';

const Component: FC = () => (
  <div className='flex justify-center items-center h-screen'>
    <div className='shadow-glass backdrop-blur-md max-w-screen-md w-[1024px] min-h-screen md:min-h-[80vh] bg-white bg-opacity-60 py-8 px-4 md:px-8 rounded'>
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
            className='shadow-glass hover:shadow-glass-hover backdrop-blur-md transition text-center cursor-pointer py-5 px-8 bg-white bg-opacity-50'
            href={link.url}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className='mt-8 h-8 flex gap-8 justify-center text-slate-400'>
        {!!website.author.social.github && (
          <a
            href={`https://github.com/${website.author.social.github}`}
            target='_blank'
            rel='noopener'
            className='w-8'
          >
            <GitHubIcon />
          </a>
        )}
        {!!website.author.social.twitter && (
          <a
            href={`https://twitter.com/${website.author.social.twitter}`}
            target='_blank'
            rel='noopener'
            className='w-8'
          >
            <TwitterIcon />
          </a>
        )}
        {!!website.author.social.zenn && (
          <a
            href={`https://zenn.dev/${website.author.social.zenn}`}
            target='_blank'
            rel='noopener'
            className='w-8'
          >
            <ZennIcon />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Component;
