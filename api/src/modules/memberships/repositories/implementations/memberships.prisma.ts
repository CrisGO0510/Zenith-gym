import { PrismaService } from 'src/core/prisma/prisma.service';
import { Prisma, TB_memberships } from 'generated/prisma';
import { Injectable } from '@nestjs/common';
import { MembershipsRepository } from '../memberships.repository';

@Injectable()
export class MembershipsPrisma implements MembershipsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_membershipsWhereInput,
  ): Promise<TB_memberships[]> {
    return this.prisma.tB_memberships.findMany({
      where,
      include: {
        TB_client_membership: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_membershipsCreateInput,
  ): Promise<TB_memberships> {
    return this.prisma.tB_memberships.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_membershipsWhereUniqueInput,
    data: Prisma.TB_membershipsUpdateInput,
  ): Promise<TB_memberships> {
    return this.prisma.tB_memberships.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_membershipsWhereUniqueInput,
  ): Promise<TB_memberships> {
    return this.prisma.tB_memberships.delete({
      where,
    });
  }
}
