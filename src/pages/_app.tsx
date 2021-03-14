import { CssBaseline } from '@material-ui/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { DarkThemeProvider } from '../contexts/Theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WList</title>
        <meta name="theme-color" content="#c3c3c3" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>
      <DarkThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </DarkThemeProvider>
    </>
  );
}
