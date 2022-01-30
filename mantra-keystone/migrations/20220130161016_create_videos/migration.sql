-- CreateTable
CREATE TABLE "Video" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "group" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "embed" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Video_group_idx" ON "Video"("group");
