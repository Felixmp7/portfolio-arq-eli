/*
  Warnings:

  - You are about to drop the `TrendingProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "trending" TEXT NOT NULL DEFAULT 'null';

-- DropTable
DROP TABLE "TrendingProject";
