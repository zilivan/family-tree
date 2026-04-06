/*
  Warnings:

  - You are about to drop the column `endDate` on the `Marriage` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Marriage` table. All the data in the column will be lost.
  - The `status` column on the `Marriage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[husbandId,wifeId]` on the table `Marriage` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Marriage_husbandId_wifeId_startDate_key";

-- AlterTable
ALTER TABLE "Marriage" DROP COLUMN "endDate",
DROP COLUMN "startDate",
DROP COLUMN "status",
ADD COLUMN     "status" "PersonStatus" NOT NULL DEFAULT 'PENDING';

-- DropEnum
DROP TYPE "MarriageStatus";

-- CreateIndex
CREATE UNIQUE INDEX "Marriage_husbandId_wifeId_key" ON "Marriage"("husbandId", "wifeId");
