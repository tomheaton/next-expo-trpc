import {t} from "../trpc";
import {helloRouter} from "./hello";
import type {inferRouterInputs, inferRouterOutputs} from "@trpc/server";

export const appRouter = t.router({
  hello: helloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
