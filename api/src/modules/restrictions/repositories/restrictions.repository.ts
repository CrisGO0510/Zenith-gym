import { Prisma, TB_restriction } from 'generated/prisma';

export abstract class RestrictionsRepository {
  abstract get(
    where: Prisma.TB_restrictionWhereInput,
  ): Promise<TB_restriction[]>;
  abstract create(
    data: Prisma.TB_restrictionUncheckedCreateInput,
  ): Promise<TB_restriction>;
  abstract update(
    where: Prisma.TB_restrictionWhereUniqueInput,
    data: Prisma.TB_restrictionUncheckedUpdateInput,
  ): Promise<TB_restriction>;
  abstract delete(
    where: Prisma.TB_restrictionWhereUniqueInput,
  ): Promise<TB_restriction>;
}
