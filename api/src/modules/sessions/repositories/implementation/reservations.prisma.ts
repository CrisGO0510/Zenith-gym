import { PrismaService } from 'src/core/prisma/prisma.service';
import { Prisma, TB_reservations } from 'generated/prisma';
import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from '../reservations.repository';

@Injectable()
export class ReservationsPrisma implements ReservationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_reservationsWhereInput,
  ): Promise<TB_reservations[]> {
    return this.prisma.tB_reservations.findMany({
      where,
      include: {
        TB_client_membership: true,
        TB_session_capacity: true,
      },
    });
  }

  public async create(
    data: Prisma.TB_reservationsUncheckedCreateInput,
  ): Promise<TB_reservations> {
    return this.prisma.tB_reservations.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_reservationsWhereUniqueInput,
    data: Prisma.TB_reservationsUncheckedUpdateInput,
  ): Promise<TB_reservations> {
    return this.prisma.tB_reservations.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_reservationsWhereUniqueInput,
  ): Promise<TB_reservations> {
    return this.prisma.tB_reservations.delete({
      where,
    });
  }
}
