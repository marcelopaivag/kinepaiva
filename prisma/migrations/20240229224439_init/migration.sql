/*
  Warnings:

  - A unique constraint covering the columns `[mail]` on the table `Cite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cite_mail_key" ON "Cite"("mail");
