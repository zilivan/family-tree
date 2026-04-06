/*
  Warnings:

  - A unique constraint covering the columns `[husbandId,wifeId,startDate]` on the table `Marriage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "MarriageStatus" AS ENUM ('ACTIVE', 'DIVORCED', 'WIDOWED');

-- DropIndex
DROP INDEX "Marriage_husbandId_wifeId_key";

-- AlterTable
ALTER TABLE "Marriage" ADD COLUMN     "branch" TEXT NOT NULL DEFAULT 'base',
ADD COLUMN     "originalMarriageId" TEXT,
ADD COLUMN     "status" "MarriageStatus" NOT NULL DEFAULT 'ACTIVE';

-- CreateIndex
CREATE UNIQUE INDEX "Marriage_husbandId_wifeId_startDate_key" ON "Marriage"("husbandId", "wifeId", "startDate");
