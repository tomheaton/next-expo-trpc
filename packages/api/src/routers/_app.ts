import {t} from "../trpc";
import {healthRouter} from "./health";
import {helloRouter} from "./hello";

export const appRouter = t.router({
    health: healthRouter,
    hello: helloRouter,
});

export type AppRouter = typeof appRouter;
