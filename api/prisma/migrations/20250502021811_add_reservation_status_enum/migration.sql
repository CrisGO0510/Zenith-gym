/*
  Warnings:

  - Changed the type of `status` on the `TB_reservations` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "reservationStatus" AS ENUM ('pendiente', 'completada', 'cancelada', 'ausente');

-- AlterTable
ALTER TABLE "TB_reservations" DROP COLUMN "status",
ADD COLUMN     "status" "reservationStatus" NOT NULL;
