-- CreateTable
CREATE TABLE "Concert" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3),
    "group" TEXT NOT NULL,
    "location" UUID,

    CONSTRAINT "Concert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Piece" (
    "id" UUID NOT NULL,
    "composer" TEXT NOT NULL DEFAULT E'',
    "title" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" UUID NOT NULL,
    "venue" TEXT NOT NULL DEFAULT E'',
    "city" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Concert_program" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE INDEX "Concert_date_idx" ON "Concert"("date");

-- CreateIndex
CREATE INDEX "Concert_group_idx" ON "Concert"("group");

-- CreateIndex
CREATE INDEX "Concert_location_idx" ON "Concert"("location");

-- CreateIndex
CREATE UNIQUE INDEX "_Concert_program_AB_unique" ON "_Concert_program"("A", "B");

-- CreateIndex
CREATE INDEX "_Concert_program_B_index" ON "_Concert_program"("B");

-- AddForeignKey
ALTER TABLE "Concert" ADD CONSTRAINT "Concert_location_fkey" FOREIGN KEY ("location") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Concert_program" ADD FOREIGN KEY ("A") REFERENCES "Concert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Concert_program" ADD FOREIGN KEY ("B") REFERENCES "Piece"("id") ON DELETE CASCADE ON UPDATE CASCADE;
