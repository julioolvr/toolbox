/*
  Warnings:

  - Added the required column `userId` to the `Toolbox` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Toolbox" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Toolbox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Toolbox" ("description", "id", "name") SELECT "description", "id", "name" FROM "Toolbox";
DROP TABLE "Toolbox";
ALTER TABLE "new_Toolbox" RENAME TO "Toolbox";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
