import Head from 'next/head';
import { Button, Grid } from '@material-ui/core';

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Head>
        <title>Home | TimeUp</title>
      </Head>
      <Grid item xs={12}>
        <div>
          Olá
          <Button variant="contained" color="primary" href="/menu">
            Hello World
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
