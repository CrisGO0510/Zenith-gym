import { PrismaService } from 'src/core/prisma/prisma.service';
import { UsersRepository } from '../users.repository';
import { Prisma, TB_users } from 'generated/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersPrisma implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(where: Prisma.TB_usersWhereInput): Promise<TB_users[]> {
    return this.prisma.tB_users.findMany({
      where,
    });
  }

  public async create(data: Prisma.TB_usersCreateInput): Promise<TB_users> {
    return this.prisma.tB_users.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_usersWhereUniqueInput,
    data: Prisma.TB_usersUpdateInput,
  ): Promise<TB_users> {
    return this.prisma.tB_users.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_usersWhereUniqueInput,
  ): Promise<TB_users> {
    return this.prisma.tB_users.delete({
      where,
    });
  }
}
