import React, { FC } from 'react';
import { GitHubIcon } from 'src/components/ui/icon/github';
import { TwitterIcon } from 'src/components/ui/icon/twitter';
import { ZennIcon } from 'src/components/ui/icon/zenn';
import { website } from 'src/static/website';

const Component: FC = () => (
  <div className='mt-8 h-6 flex gap-8 justify-center text-slate-400'>
    {!!website.author.social.github && (
      <a
        href={`https://github.com/${website.author.social.github}`}
        target='_blank'
        rel='noopener'
        className='w-6'
      >
        <GitHubIcon />
      </a>
    )}
    {!!website.author.social.twitter && (
      <a
        href={`https://twitter.com/${website.author.social.twitter}`}
        target='_blank'
        rel='noopener'
        className='w-6'
      >
        <TwitterIcon />
      </a>
    )}
    {!!website.author.social.zenn && (
      <a
        href={`https://zenn.dev/${website.author.social.zenn}`}
        target='_blank'
        rel='noopener'
        className='w-6'
      >
        <ZennIcon />
      </a>
    )}
  </div>
);

export default Component;
