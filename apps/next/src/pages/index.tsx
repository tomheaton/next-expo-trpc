import {NextPage} from 'next';
import Head from 'next/head';
import {trpc} from "@utils/trpc";
import Link from "next/link";

const Index: NextPage = () => {
    const postsQuery = trpc.useQuery(['post.all']);

    return (
        <div className={"h-screen flex flex-col items-center justify-center"}>
            <Head>
                <title>next + expo + trpc</title>
                <meta name="description" content="next + expo + trpc"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1 className={"text-lg font-bold"}>
                next + expo + trpc
            </h1>

            <br/>

            <h2>
                Posts {postsQuery.status === 'loading' && '(loading)'}
            </h2>

            {postsQuery.data?.map((item) => (
                <article key={item.id}>
                    <h3>
                        {item.title}
                    </h3>
                    <Link href={`/post/${item.id}`}>
                        <a>
                            View more
                        </a>
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default Index;
