import type {inferAsyncReturnType} from "@trpc/server";
import type {CreateNextContextOptions} from "@trpc/server/adapters/next";

type CreateContextOptions = {
  // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js request/response
 */
export const createContextInner = async (opts: CreateContextOptions) => {
  return {};
};

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (opts: CreateNextContextOptions) => {
  return await createContextInner({});
};

export type Context = inferAsyncReturnType<typeof createContext>;
