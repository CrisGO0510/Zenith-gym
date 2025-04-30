import { Prisma, TB_role } from 'generated/prisma';

export abstract class RolesRepository {
  abstract get(where: Prisma.TB_roleWhereInput): Promise<TB_role[]>;
  abstract create(data: Prisma.TB_roleCreateInput): Promise<TB_role>;
  abstract update(
    where: Prisma.TB_roleWhereUniqueInput,
    data: Prisma.TB_roleUpdateInput,
  ): Promise<TB_role>;
  abstract delete(where: Prisma.TB_roleWhereUniqueInput): Promise<TB_role>;
}
