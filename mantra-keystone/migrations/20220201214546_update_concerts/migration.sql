/*
  Warnings:

  - You are about to drop the column `date` on the `Concert` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Concert_date_idx";

-- AlterTable
ALTER TABLE "Concert" DROP COLUMN "date",
ADD COLUMN     "dateFrom" TIMESTAMP(3),
ADD COLUMN     "dateTo" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Concert_dateFrom_idx" ON "Concert"("dateFrom");

-- CreateIndex
CREATE INDEX "Concert_dateTo_idx" ON "Concert"("dateTo");
