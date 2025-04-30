import { Prisma, TB_user_role } from 'generated/prisma';

export abstract class UsersRolesRepository {
  abstract get(where: Prisma.TB_user_roleWhereInput): Promise<TB_user_role[]>;
  abstract create(
    data: Prisma.TB_user_roleUncheckedCreateInput,
  ): Promise<TB_user_role>;
  abstract update(
    where: Prisma.TB_user_roleWhereUniqueInput,
    data: Prisma.TB_user_roleUncheckedUpdateInput,
  ): Promise<TB_user_role>;
  abstract delete(
    where: Prisma.TB_user_roleWhereUniqueInput,
  ): Promise<TB_user_role>;
}
