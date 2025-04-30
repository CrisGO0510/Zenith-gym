import { Prisma, TB_routines } from 'generated/prisma';

export abstract class RoutinesRepository {
  abstract get(where: Prisma.TB_routinesWhereInput): Promise<TB_routines[]>;
  abstract create(data: Prisma.TB_routinesUncheckedCreateInput): Promise<TB_routines>;
  abstract update(
    where: Prisma.TB_routinesWhereUniqueInput,
    data: Prisma.TB_routinesUncheckedUpdateInput,
  ): Promise<TB_routines>;
  abstract delete(where: Prisma.TB_routinesWhereUniqueInput): Promise<TB_routines>;
}
