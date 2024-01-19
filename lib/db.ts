import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// A : Prevent Overflow PrimaClient when Development (If used code B)
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// B:  real implement in Production
// export const db = new PrismaClient();
