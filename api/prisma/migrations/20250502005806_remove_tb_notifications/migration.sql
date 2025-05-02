/*
  Warnings:

  - You are about to drop the `TB_notifications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TB_notifications" DROP CONSTRAINT "TB_notifications_id_user_fkey";

-- DropTable
DROP TABLE "TB_notifications";
