import { PrismaClient } from '@prisma/client';
import { prisma } from '../lib/prisma';

export type Context = {
  prisma: PrismaClient;
};

// @ts-ignore - not in use
export async function createContext(_req, _res): Promise<Context> {
  return {
    prisma,
  };
}
