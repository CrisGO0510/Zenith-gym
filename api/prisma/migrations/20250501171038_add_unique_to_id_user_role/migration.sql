/*
  Warnings:

  - A unique constraint covering the columns `[id_user_role]` on the table `TB_employees` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TB_employees_id_user_role_key" ON "TB_employees"("id_user_role");
