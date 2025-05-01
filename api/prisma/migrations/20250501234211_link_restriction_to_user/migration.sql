/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `TB_restriction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TB_restriction_id_user_key" ON "TB_restriction"("id_user");
