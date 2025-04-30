-- CreateEnum
CREATE TYPE "frequency" AS ENUM ('diario', 'semanal', 'quincenal', 'mensual', 'semestral', 'anual');

-- CreateEnum
CREATE TYPE "reservationStatus" AS ENUM ('pendiente', 'completada', 'cancelada', 'ausente');

-- CreateTable
CREATE TABLE "TB_users" (
    "id_user" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "lastname" VARCHAR(64) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(16) NOT NULL,
    "birthday" DATE NOT NULL,

    CONSTRAINT "TB_users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "TB_role" (
    "id_role" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,

    CONSTRAINT "TB_role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "TB_user_role" (
    "id_user_role" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_role" INTEGER NOT NULL,

    CONSTRAINT "TB_user_role_pkey" PRIMARY KEY ("id_user_role")
);

-- CreateTable
CREATE TABLE "TB_restriction" (
    "id_restriction" SERIAL NOT NULL,
    "id_user_role" INTEGER NOT NULL,
    "description" VARCHAR(1024) NOT NULL,

    CONSTRAINT "TB_restriction_pkey" PRIMARY KEY ("id_restriction")
);

-- CreateTable
CREATE TABLE "TB_employees" (
    "id" SERIAL NOT NULL,
    "id_user_role" INTEGER NOT NULL,
    "bio" VARCHAR(1024) NOT NULL,
    "specialization" VARCHAR(128) NOT NULL,
    "date_entry" DATE NOT NULL,

    CONSTRAINT "TB_employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_memberships" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "paymentFrequency" "frequency" NOT NULL,

    CONSTRAINT "TB_memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_client_membership" (
    "id" SERIAL NOT NULL,
    "id_user_role" INTEGER NOT NULL,
    "id_membership" INTEGER NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,

    CONSTRAINT "TB_client_membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_routines" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "estimatedDuration" INTEGER NOT NULL,

    CONSTRAINT "TB_routines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_exercises" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "muscle_group" VARCHAR(64) NOT NULL,

    CONSTRAINT "TB_exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_routine_exercise" (
    "id" SERIAL NOT NULL,
    "id_routine" INTEGER NOT NULL,
    "id_exercise" INTEGER NOT NULL,

    CONSTRAINT "TB_routine_exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_session_capacity" (
    "id" SERIAL NOT NULL,
    "id_routine" INTEGER NOT NULL,
    "id_instructor" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "TB_session_capacity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_reservations" (
    "id" SERIAL NOT NULL,
    "id_client_membership" INTEGER NOT NULL,
    "id_session_capacity" INTEGER NOT NULL,
    "start_time" DATE NOT NULL,
    "status" "reservationStatus" NOT NULL,

    CONSTRAINT "TB_reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_notifications" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "message" VARCHAR(64) NOT NULL,
    "sent_date" DATE NOT NULL,

    CONSTRAINT "TB_notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TB_users_email_key" ON "TB_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TB_role_name_key" ON "TB_role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TB_memberships_name_key" ON "TB_memberships"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TB_routines_name_key" ON "TB_routines"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TB_exercises_name_key" ON "TB_exercises"("name");

-- AddForeignKey
ALTER TABLE "TB_user_role" ADD CONSTRAINT "TB_user_role_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "TB_users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_user_role" ADD CONSTRAINT "TB_user_role_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "TB_role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_restriction" ADD CONSTRAINT "TB_restriction_id_user_role_fkey" FOREIGN KEY ("id_user_role") REFERENCES "TB_user_role"("id_user_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_employees" ADD CONSTRAINT "TB_employees_id_user_role_fkey" FOREIGN KEY ("id_user_role") REFERENCES "TB_user_role"("id_user_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_client_membership" ADD CONSTRAINT "TB_client_membership_id_user_role_fkey" FOREIGN KEY ("id_user_role") REFERENCES "TB_user_role"("id_user_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_client_membership" ADD CONSTRAINT "TB_client_membership_id_membership_fkey" FOREIGN KEY ("id_membership") REFERENCES "TB_memberships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_routine_exercise" ADD CONSTRAINT "TB_routine_exercise_id_routine_fkey" FOREIGN KEY ("id_routine") REFERENCES "TB_routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_routine_exercise" ADD CONSTRAINT "TB_routine_exercise_id_exercise_fkey" FOREIGN KEY ("id_exercise") REFERENCES "TB_exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_session_capacity" ADD CONSTRAINT "TB_session_capacity_id_routine_fkey" FOREIGN KEY ("id_routine") REFERENCES "TB_routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_session_capacity" ADD CONSTRAINT "TB_session_capacity_id_instructor_fkey" FOREIGN KEY ("id_instructor") REFERENCES "TB_employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_reservations" ADD CONSTRAINT "TB_reservations_id_client_membership_fkey" FOREIGN KEY ("id_client_membership") REFERENCES "TB_client_membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_reservations" ADD CONSTRAINT "TB_reservations_id_session_capacity_fkey" FOREIGN KEY ("id_session_capacity") REFERENCES "TB_session_capacity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TB_notifications" ADD CONSTRAINT "TB_notifications_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "TB_users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
