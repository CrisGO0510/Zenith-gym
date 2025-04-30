import { PrismaService } from 'src/core/prisma/prisma.service';
import { Prisma, TB_restriction } from 'generated/prisma';
import { Injectable } from '@nestjs/common';
import { RestrictionsRepository } from '../restrictions.repository';

@Injectable()
export class RestrictionsPrisma implements RestrictionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_restrictionWhereInput,
  ): Promise<TB_restriction[]> {
    return this.prisma.tB_restriction.findMany({
      where,
      include: {
        TB_user_role: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_restrictionUncheckedCreateInput,
  ): Promise<TB_restriction> {
    return this.prisma.tB_restriction.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_restrictionWhereUniqueInput,
    data: Prisma.TB_restrictionUncheckedUpdateInput,
  ): Promise<TB_restriction> {
    return this.prisma.tB_restriction.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_restrictionWhereUniqueInput,
  ): Promise<TB_restriction> {
    return this.prisma.tB_restriction.delete({
      where,
    });
  }
}
