/*
  Warnings:

  - You are about to drop the column `parentId` on the `Person` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_parentId_fkey";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "parentId",
ADD COLUMN     "fatherId" TEXT,
ADD COLUMN     "motherId" TEXT;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_motherId_fkey" FOREIGN KEY ("motherId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
