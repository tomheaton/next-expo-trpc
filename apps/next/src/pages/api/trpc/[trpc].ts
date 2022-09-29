import * as trpcNext from '@trpc/server/adapters/next';
import {appRouter} from "@next-expo-trpc/api/src/routers/_app";
import {createContext} from "@next-expo-trpc/api/src/context";

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: createContext,
});
