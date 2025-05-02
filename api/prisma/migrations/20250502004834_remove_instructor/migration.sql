/*
  Warnings:

  - You are about to drop the column `id_instructor` on the `TB_session_capacity` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TB_session_capacity" DROP CONSTRAINT "TB_session_capacity_id_instructor_fkey";

-- AlterTable
ALTER TABLE "TB_session_capacity" DROP COLUMN "id_instructor";
