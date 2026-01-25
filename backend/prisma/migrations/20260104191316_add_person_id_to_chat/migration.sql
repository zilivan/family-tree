-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "parentLastName" TEXT,
ADD COLUMN     "patronymic" TEXT;

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "isGuest" BOOLEAN NOT NULL,
    "personId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);
