/*
  Warnings:

  - You are about to drop the column `generalGuidelines` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "generalGuidelines",
ADD COLUMN     "howWeDoIt" TEXT[],
ADD COLUMN     "whatIncludes" TEXT[];
