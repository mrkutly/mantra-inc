-- CreateTable
CREATE TABLE "Team" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "team" UUID,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMemberRole" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "member" UUID,

    CONSTRAINT "TeamMemberRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TeamMember_team_idx" ON "TeamMember"("team");

-- CreateIndex
CREATE INDEX "TeamMemberRole_member_idx" ON "TeamMemberRole"("member");

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_team_fkey" FOREIGN KEY ("team") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMemberRole" ADD CONSTRAINT "TeamMemberRole_member_fkey" FOREIGN KEY ("member") REFERENCES "TeamMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
