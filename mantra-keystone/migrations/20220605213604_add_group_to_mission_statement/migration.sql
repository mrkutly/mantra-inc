/*
  Warnings:

  - Added the required column `group` to the `MissionStatement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MissionStatement" ADD COLUMN     "group" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "MissionStatement_group_idx" ON "MissionStatement"("group");
