import styled from '@emotion/styled';
import React, { FC } from 'react';
import { website } from 'src/static/website';

const Component: FC<{ className?: string }> = (props) => (
  <div className={props.className}>
    <div className='container'>
      <div className='icon'></div>
      <div>
        <div className='name'>{website.author.name}</div>
        <div className='description'></div>
      </div>
      <div className='links'>
        {website.author.links.map((link, i) => (
          <a key={i}>{link.label}</a>
        ))}
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    max-width: 1080px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default StyledComponent;
