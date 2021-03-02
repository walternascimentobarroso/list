import Head from 'next/head';
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home | TimeUp</title>
            </Head>
            <div>
                Olá

                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        </div>
    );
}