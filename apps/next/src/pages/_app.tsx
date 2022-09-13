import '@styles/globals.css'
import {httpBatchLink} from '@trpc/client/links/httpBatchLink';
import {loggerLink} from '@trpc/client/links/loggerLink';
import {withTRPC} from '@trpc/next';
import {AppRouter} from '@next-expo-trpc/api/src/routers/_app';
import {transformer} from '@utils/trpc';
import {AppProps} from "next/app";
import {getBaseUrl} from "@utils/index";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Component {...pageProps} />
    );
};

export default withTRPC<AppRouter>({
    config() {
        const url = `${getBaseUrl()}/api/trpc`;
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         */
        return {
            /**
             * @link https://trpc.io/docs/links
             */
            links: [
                // adds pretty logs to your console in development and logs errors in production
                loggerLink({
                    enabled: (opts) =>
                        process.env.NODE_ENV === 'development' ||
                        (opts.direction === 'down' && opts.result instanceof Error),
                }),
                httpBatchLink({
                    url,
                }),
            ],
            /**
             * @link https://trpc.io/docs/data-transformers
             */
            transformer,
            /**
             * @link https://react-query.tanstack.com/reference/QueryClient
             */
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 6000 } } },
        };
    },
    /**
     * @link https://trpc.io/docs/ssr
     */
    ssr: true,
    /**
     * Set headers or status code when doing SSR
     */
    responseMeta({clientErrors}) {
        if (clientErrors.length) {
            // propagate http first error from API calls
            return {
                status: clientErrors[0].data?.httpStatus ?? 500,
            };
        }

        // for app caching with SSR see https://trpc.io/docs/caching

        return {};
    },
})(App);
