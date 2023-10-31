import { PrismaClient } from '@prisma/client';

const myPrismaClient = new PrismaClient();

export const prisma = myPrismaClient;