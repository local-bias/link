import type { AppProps } from 'next/app';
import 'src/styles/reset.css';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
