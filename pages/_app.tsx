import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo-config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
