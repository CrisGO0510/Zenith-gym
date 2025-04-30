import { PrismaService } from 'src/core/prisma/prisma.service';
import { UsersRolesRepository } from '../users_roles.repository';
import { Prisma, TB_user_role } from 'generated/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRolesPrisma implements UsersRolesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_user_roleWhereInput,
  ): Promise<TB_user_role[]> {
    return this.prisma.tB_user_role.findMany({
      where,
      include: {
        TB_users: true,
        TB_role: true,
        TB_restriction: true,
        TB_employees: true,
        TB_client_membership: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_user_roleUncheckedCreateInput,
  ): Promise<TB_user_role> {
    return this.prisma.tB_user_role.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_user_roleWhereUniqueInput,
    data: Prisma.TB_user_roleUpdateInput,
  ): Promise<TB_user_role> {
    return this.prisma.tB_user_role.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_user_roleWhereUniqueInput,
  ): Promise<TB_user_role> {
    return this.prisma.tB_user_role.delete({
      where,
    });
  }
}
