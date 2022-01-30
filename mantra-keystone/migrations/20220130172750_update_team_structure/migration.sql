/*
  Warnings:

  - You are about to drop the column `member` on the `TeamMemberRole` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeamMemberRole" DROP CONSTRAINT "TeamMemberRole_member_fkey";

-- DropIndex
DROP INDEX "TeamMemberRole_member_idx";

-- AlterTable
ALTER TABLE "TeamMemberRole" DROP COLUMN "member";

-- CreateTable
CREATE TABLE "_TeamMember_roles" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeamMember_roles_AB_unique" ON "_TeamMember_roles"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamMember_roles_B_index" ON "_TeamMember_roles"("B");

-- AddForeignKey
ALTER TABLE "_TeamMember_roles" ADD FOREIGN KEY ("A") REFERENCES "TeamMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamMember_roles" ADD FOREIGN KEY ("B") REFERENCES "TeamMemberRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;
