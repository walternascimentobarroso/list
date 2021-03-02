import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/screen/Layout/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>List</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
