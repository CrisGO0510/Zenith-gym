import { Prisma, TB_routine_exercise } from 'generated/prisma';

export abstract class RoutinesExercisesRepository {
  abstract get(where: Prisma.TB_routine_exerciseWhereInput): Promise<TB_routine_exercise[]>;
  abstract create(data: Prisma.TB_routine_exerciseUncheckedCreateInput): Promise<TB_routine_exercise>;
  abstract update(
    where: Prisma.TB_routine_exerciseWhereUniqueInput,
    data: Prisma.TB_routine_exerciseUncheckedUpdateInput,
  ): Promise<TB_routine_exercise>;
  abstract delete(where: Prisma.TB_routine_exerciseWhereUniqueInput): Promise<TB_routine_exercise>;
}
