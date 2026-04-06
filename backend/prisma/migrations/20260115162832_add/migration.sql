-- CreateEnum
CREATE TYPE "ModeStatus" AS ENUM ('CREATE', 'EDIT', 'NEW');

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "modeStatus" "ModeStatus" NOT NULL DEFAULT 'NEW',
ADD COLUMN     "modeStatusEditId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isBlocked" BOOLEAN NOT NULL DEFAULT false;
