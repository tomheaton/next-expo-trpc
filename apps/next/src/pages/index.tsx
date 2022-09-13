import {NextPage} from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
    return (
        <div className={"h-screen flex flex-col items-center justify-center"}>
            <Head>
                <title>next + expo + trpc</title>
                <meta name="description" content="next + expo + trpc"/>
                <link rel="icon" href="/apps/next/public/favicon.ico"/>
            </Head>

            <h1 className={"text-lg font-bold"}>
                next + expo + trpc
            </h1>
        </div>
    );
}

export default Index;
