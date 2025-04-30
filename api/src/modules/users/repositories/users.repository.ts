import { Prisma, TB_users } from 'generated/prisma';

export abstract class UsersRepository {
  abstract get(where: Prisma.TB_usersWhereInput): Promise<TB_users[]>;
  abstract create(data: Prisma.TB_usersCreateInput): Promise<TB_users>;
  abstract update(
    where: Prisma.TB_usersWhereUniqueInput,
    data: Prisma.TB_usersUpdateInput,
  ): Promise<TB_users>;
  abstract delete(where: Prisma.TB_usersWhereUniqueInput): Promise<TB_users>;
}
