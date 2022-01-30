-- CreateTable
CREATE TABLE "Article" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "group" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "publication" TEXT NOT NULL DEFAULT E'',
    "pull_quote" TEXT NOT NULL DEFAULT E'',
    "author" TEXT NOT NULL DEFAULT E'',
    "link" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Article_group_idx" ON "Article"("group");
