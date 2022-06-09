import React, { FC } from 'react';

import Background from './background';
import Contents from './contents';

const Component: FC = () => (
  <>
    <Background />
    <main>
      <Contents />
    </main>
  </>
);
export default Component;
