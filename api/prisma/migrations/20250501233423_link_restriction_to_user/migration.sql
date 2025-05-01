/*
  Warnings:

  - You are about to drop the column `id_user_role` on the `TB_restriction` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `TB_restriction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TB_restriction" DROP CONSTRAINT "TB_restriction_id_user_role_fkey";

-- AlterTable
ALTER TABLE "TB_restriction" DROP COLUMN "id_user_role",
ADD COLUMN     "id_user" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TB_restriction" ADD CONSTRAINT "TB_restriction_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "TB_users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
