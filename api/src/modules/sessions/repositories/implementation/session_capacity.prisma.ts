import { PrismaService } from 'src/core/prisma/prisma.service';
import { Prisma, TB_session_capacity } from 'generated/prisma';
import { Injectable } from '@nestjs/common';
import { SessionCapacityRepository } from '../session_capacity.repository';

@Injectable()
export class SessionCapacityPrisma implements SessionCapacityRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_session_capacityWhereInput,
  ): Promise<TB_session_capacity[]> {
    return this.prisma.tB_session_capacity.findMany({
      where,
      include: {
        TB_employees: true,
        TB_reservations: true,
        TB_routines: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_session_capacityUncheckedCreateInput,
  ): Promise<TB_session_capacity> {
    return this.prisma.tB_session_capacity.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_session_capacityWhereUniqueInput,
    data: Prisma.TB_session_capacityUncheckedUpdateInput,
  ): Promise<TB_session_capacity> {
    return this.prisma.tB_session_capacity.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_session_capacityWhereUniqueInput,
  ): Promise<TB_session_capacity> {
    return this.prisma.tB_session_capacity.delete({
      where,
    });
  }
}
