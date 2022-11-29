import {createTRPCReact} from "@trpc/react-query";
import type {AppRouter, RouterInputs, RouterOutputs} from "@next-expo-trpc/api";
import Constants from "expo-constants";
import React, {useState, type PropsWithChildren} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";
import superjson from "superjson";

/**
 * A set of typesafe hooks for consuming your API.
 */
export const trpc = createTRPCReact<AppRouter>();

/**
 * Gets the IP address of your host-machine.
 */
const getBaseUrl = (): string => {
  // development
  if (__DEV__) {
    const localhost = Constants.manifest?.debuggerHost?.split(":").shift();
    if (!localhost) {
      throw new Error("Failed to get localhost, configure it manually!");
    }
    return `http://${localhost}:3000`;
  }

  // production
  return `${Constants.manifest?.extra?.apiUrl}`;
};

/**
 * A wrapper for your app that provides the TRPC context.
 * Use only in the main _layout.tsx
 */
export const TRPCProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export type {RouterInputs, RouterOutputs};
