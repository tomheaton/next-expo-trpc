import {createNextApiHandler} from '@trpc/server/adapters/next';
import {appRouter, createContext} from "@next-expo-trpc/api";

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
