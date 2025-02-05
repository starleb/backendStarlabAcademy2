/*
  Warnings:

  - You are about to drop the column `fakultasId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `programStudiId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Fakultas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProgramStudi` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fakultas` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programStudi` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProgramStudi" DROP CONSTRAINT "ProgramStudi_fakultasId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fakultasId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_programStudiId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fakultasId",
DROP COLUMN "programStudiId",
ADD COLUMN     "fakultas" TEXT NOT NULL,
ADD COLUMN     "programStudi" TEXT NOT NULL;

-- DropTable
DROP TABLE "Fakultas";

-- DropTable
DROP TABLE "ProgramStudi";
