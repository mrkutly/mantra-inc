-- CreateTable
CREATE TABLE "MissionStatement" (
    "id" UUID NOT NULL,
    "content" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',

    CONSTRAINT "MissionStatement_pkey" PRIMARY KEY ("id")
);
