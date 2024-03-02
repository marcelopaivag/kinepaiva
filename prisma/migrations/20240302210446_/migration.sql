/*
  Warnings:

  - You are about to drop the column `dateTime` on the `Cite` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "mail" TEXT NOT NULL
);
INSERT INTO "new_Cite" ("id", "lastname", "mail", "name", "phone") SELECT "id", "lastname", "mail", "name", "phone" FROM "Cite";
DROP TABLE "Cite";
ALTER TABLE "new_Cite" RENAME TO "Cite";
CREATE UNIQUE INDEX "Cite_mail_key" ON "Cite"("mail");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
