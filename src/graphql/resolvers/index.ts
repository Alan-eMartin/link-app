import { Context } from '../context';

export const resolvers = {
  Query: {
    links: async (_parent: any, args: any, ctx: Context) =>
      await prisma?.link.findMany(),
  },
};
