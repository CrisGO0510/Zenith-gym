// repositories/implementations/reservations.prisma.ts
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ReservationsRepository } from '../reservations.repository';
import { Prisma, TB_reservations } from 'generated/prisma';
import { CreateReservationDto } from '../../dto/create-reservation.dto';

@Injectable()
export class ReservationsPrisma implements ReservationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async get(
    where: Prisma.TB_reservationsWhereInput,
  ): Promise<TB_reservations[]> {
    return this.prisma.tB_reservations.findMany({ where });
  }

  async create(
    data: Prisma.TB_reservationsUncheckedCreateInput,
  ): Promise<TB_reservations> {
    const { id_routine, start_time } = data;

    const routine = await this.prisma.tB_routines.findUnique({
      where: { id: id_routine },
    });

    if (!routine) throw new NotFoundException('Rutina no encontrada');

    const reservationCount = await this.prisma.tB_reservations.count({
      where: {
        id_routine,
        start_time: new Date(start_time),
        status: 'pendiente',
      },
    });

    if (reservationCount >= routine.capacity) {
      throw new ConflictException(
        'La rutina ya alcanzó su capacidad máxima para ese horario',
      );
    }

    return this.prisma.tB_reservations.create({ data });
  }

  async update(
    where: Prisma.TB_reservationsWhereUniqueInput,
    data: Prisma.TB_reservationsUncheckedUpdateInput,
  ): Promise<TB_reservations> {
    return this.prisma.tB_reservations.update({
      where,
      data,
    });
  }
}
