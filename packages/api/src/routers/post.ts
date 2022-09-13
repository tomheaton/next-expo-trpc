/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */

import {createRouter} from '../createRouter';
import {z} from 'zod';
import {TRPCError} from '@trpc/server';

let posts = [
  {
    id: "1",
    title: "test title",
    text: "test description"
  },
  {
    id: "2",
    title: "test 2 title",
    text: "test 2 description"
  },
  {
    id: "3",
    title: "test 3 title",
    text: "test 3 description"
  }
]

export const postRouter = createRouter()
  // create
  .mutation('add', {
    input: z.object({
      id: z.string().uuid().optional(),
      title: z.string().min(1).max(32),
      text: z.string().min(1),
    }),
    async resolve({ ctx, input }) {
      /*const todo = await ctx.prisma.post.create({
        data: input,
      });*/
      return posts[0];
    },
  })
  // read
  .query('all', {
    async resolve({ ctx }) {
      /**
       * For pagination, you can have a look at this docs site
       * @link https://trpc.io/docs/useInfiniteQuery
       */

      /*return ctx.prisma.post.findMany({
        select: {
          id: true,
          title: true,
        },
      });*/

      return posts;
    },
  })
  .query('byId', {
    input: z.string(),
    async resolve({ ctx, input }) {
      /*const post = await ctx.prisma.post.findUnique({
        where: { id: input },
      });*/

      const post = posts.find((p) => p.id === input);

      if (!post) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No post with id '${input}'`,
        });
      }
      return post;
    },
  })
  // update
  .mutation('edit', {
    input: z.object({
      id: z.string().uuid(),
      data: z.object({
        title: z.string().min(1).max(32).optional(),
        text: z.string().min(1).optional(),
      }),
    }),
    async resolve({ ctx, input }) {
      // const { id, data } = input;
      /*const todo = await ctx.prisma.post.update({
        where: { id },
        data,
      });*/

      const todo = posts[1];

      return todo;
    },
  })
  // delete
  .mutation('delete', {
    input: z.string().uuid(),
    async resolve({ input: id, ctx }) {
      // await ctx.prisma.post.delete({ where: { id } });
      return id;
    },
  });
