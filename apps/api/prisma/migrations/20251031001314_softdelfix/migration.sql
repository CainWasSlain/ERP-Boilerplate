/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Inventory_itemName_key";

-- DropIndex
DROP INDEX "public"."Project_name_key";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deletedAt";
