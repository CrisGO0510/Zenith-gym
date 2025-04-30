import { Prisma, TB_exercises } from 'generated/prisma';

export abstract class ExercisesRepository {
  abstract get(where: Prisma.TB_exercisesWhereInput): Promise<TB_exercises[]>;
  abstract create(data: Prisma.TB_exercisesUncheckedCreateInput): Promise<TB_exercises>;
  abstract update(
    where: Prisma.TB_exercisesWhereUniqueInput,
    data: Prisma.TB_exercisesUncheckedUpdateInput,
  ): Promise<TB_exercises>;
  abstract delete(where: Prisma.TB_exercisesWhereUniqueInput): Promise<TB_exercises>;
}
