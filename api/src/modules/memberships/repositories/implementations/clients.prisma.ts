import { PrismaService } from 'src/core/prisma/prisma.service';
import { ClientsRepository } from '../clients.repository';
import { Prisma, TB_client_membership } from 'generated/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsPrisma implements ClientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_client_membershipWhereInput,
  ): Promise<TB_client_membership[]> {
    return this.prisma.tB_client_membership.findMany({
      where,
      include: {
        TB_user_role: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_client_membershipUncheckedCreateInput,
  ): Promise<TB_client_membership> {
    return this.prisma.tB_client_membership.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_client_membershipWhereUniqueInput,
    data: Prisma.TB_client_membershipUncheckedUpdateInput,
  ): Promise<TB_client_membership> {
    return this.prisma.tB_client_membership.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_client_membershipWhereUniqueInput,
  ): Promise<TB_client_membership> {
    return this.prisma.tB_client_membership.delete({
      where,
    });
  }
}
