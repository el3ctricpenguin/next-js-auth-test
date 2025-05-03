import { isProduction } from "@/constants";
import { PrismaClient } from "../../prisma/generated";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ["query"],
    });

if (!isProduction) globalForPrisma.prisma = prisma;
