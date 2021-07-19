import type { AppProps } from 'next/app';
import { globalStyles } from 'lib/css/global';

export function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default App;