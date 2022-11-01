-- CreateTable
CREATE TABLE "Program" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "group" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "durationInMinutes" INTEGER,
    "description" TEXT NOT NULL DEFAULT E'',
    "link" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrumentation" (
    "id" UUID NOT NULL,
    "instruments" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Instrumentation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollaboratorRole" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "CollaboratorRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaborator" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "role" UUID,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Program_instrumentations" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_Program_collaborators" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE INDEX "Program_group_idx" ON "Program"("group");

-- CreateIndex
CREATE INDEX "Collaborator_role_idx" ON "Collaborator"("role");

-- CreateIndex
CREATE UNIQUE INDEX "_Program_instrumentations_AB_unique" ON "_Program_instrumentations"("A", "B");

-- CreateIndex
CREATE INDEX "_Program_instrumentations_B_index" ON "_Program_instrumentations"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Program_collaborators_AB_unique" ON "_Program_collaborators"("A", "B");

-- CreateIndex
CREATE INDEX "_Program_collaborators_B_index" ON "_Program_collaborators"("B");

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_role_fkey" FOREIGN KEY ("role") REFERENCES "CollaboratorRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Program_instrumentations" ADD FOREIGN KEY ("A") REFERENCES "Instrumentation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Program_instrumentations" ADD FOREIGN KEY ("B") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Program_collaborators" ADD FOREIGN KEY ("A") REFERENCES "Collaborator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Program_collaborators" ADD FOREIGN KEY ("B") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;
