import type { AppProps } from 'next/app';
import 'src/styles/reset.css';
import 'src/styles/global.css';

import { GoogleTagManager } from 'src/components/functional/google-tag-manager';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GoogleTagManager />
    <Component {...pageProps} />
  </>
);

export default App;
