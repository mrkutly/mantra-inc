-- CreateTable
CREATE TABLE "Image" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "altText" TEXT NOT NULL DEFAULT '',
    "image" JSONB,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
