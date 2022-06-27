import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` declarations
  var prisma: PrismaClient | undefined;
}

// Next specific - prevents multiple instances of PrismaClient in development
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
