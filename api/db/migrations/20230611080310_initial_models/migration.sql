-- CreateTable
CREATE TABLE "Toolbox" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ToolboxTool" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "comment" TEXT NOT NULL,
    "toolboxId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    CONSTRAINT "ToolboxTool_toolboxId_fkey" FOREIGN KEY ("toolboxId") REFERENCES "Toolbox" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ToolboxTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL
);
