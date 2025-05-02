/*
  Warnings:

  - You are about to drop the column `id_session_capacity` on the `TB_reservations` table. All the data in the column will be lost.
  - You are about to drop the `TB_session_capacity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_routine` to the `TB_reservations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TB_reservations" DROP CONSTRAINT "TB_reservations_id_session_capacity_fkey";

-- DropForeignKey
ALTER TABLE "TB_session_capacity" DROP CONSTRAINT "TB_session_capacity_id_routine_fkey";

-- AlterTable
ALTER TABLE "TB_reservations" DROP COLUMN "id_session_capacity",
ADD COLUMN     "id_routine" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TB_routines" ADD COLUMN     "capacity" INTEGER NOT NULL DEFAULT 10;

-- DropTable
DROP TABLE "TB_session_capacity";

-- AddForeignKey
ALTER TABLE "TB_reservations" ADD CONSTRAINT "TB_reservations_id_routine_fkey" FOREIGN KEY ("id_routine") REFERENCES "TB_routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
