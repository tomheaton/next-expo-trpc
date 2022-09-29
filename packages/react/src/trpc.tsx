import {httpBatchLink} from '@trpc/client';
import {createTRPCNext} from '@trpc/next';
import type {AppRouter} from '@next-expo-trpc/api/src/routers/_app';
import superjson from 'superjson';

const getBaseUrl = (): string => {
    // browser should use relative path
    if (typeof window !== 'undefined')
        return '';

    // reference for vercel.com
    if (process.env.VERCEL_URL)
        return `https://${process.env.VERCEL_URL}`;

    // reference for render.com
    if (process.env.RENDER_INTERNAL_HOSTNAME)
        return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
    config({ctx}) {
        return {
            transformer: superjson,
            links: [
                httpBatchLink({
                    /**
                     * If you want to use SSR, you need to use the server's full URL
                     * @link https://trpc.io/docs/ssr
                     **/
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
            /**
             * @link https://react-query-v3.tanstack.com/reference/QueryClient
             **/
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        };
    },
    /**
     * @link https://trpc.io/docs/ssr
     **/
    ssr: true,
});

export type {AppRouter};
