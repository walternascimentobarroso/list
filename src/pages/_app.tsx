import { useState } from 'react';
import { ThemeProvider, CssBaseline, Switch } from '@material-ui/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { themeLight, themeDark } from '../../lib/theme';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themeDark : themeLight;
  const handleThemeChange = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <Head>
        <title>WList</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Switch checked={isDark} onChange={handleThemeChange} />
      </ThemeProvider>
    </>
  );
}
