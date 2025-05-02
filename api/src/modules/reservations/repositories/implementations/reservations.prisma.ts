// repositories/implementations/reservations.prisma.ts
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ReservationsRepository } from '../reservations.repository';
import { Prisma, TB_reservations } from 'generated/prisma';

@Injectable()
export class ReservationsPrisma implements ReservationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async get(
    where: Prisma.TB_reservationsWhereInput & { id_user?: number | string },
  ): Promise<(TB_reservations & { end_time: Date })[]> {
    const { id_user, ...rest } = where;

    return this.prisma.tB_reservations
      .findMany({
        where: {
          ...rest,
          TB_client_membership: id_user
            ? {
                TB_user_role: {
                  id_user:
                    typeof id_user === 'string'
                      ? parseInt(id_user, 10)
                      : id_user,
                },
              }
            : undefined,
        },
        include: {
          TB_routines: {
            include: {
              TB_routine_exercise: {
                include: {
                  TB_exercises: true,
                },
              },
            },
          },
          TB_client_membership: {
            include: {
              TB_user_role: {
                include: {
                  TB_users: true,
                },
              },
            },
          },
        },
      })
      .then((reservations) =>
        reservations.map((res) => {
          const duration = res.TB_routines?.estimatedDuration ?? 0;
          const end_time = new Date(res.start_time);
          end_time.setMinutes(end_time.getMinutes() + duration);
          return { ...res, end_time };
        }),
      );
  }

  async getPending(
    where: Prisma.TB_reservationsWhereInput & { id_user?: number | string },
  ): Promise<(TB_reservations & { end_time: Date })[]> {
    const { id_user, ...rest } = where;

    return this.prisma.tB_reservations
      .findMany({
        where: {
          ...rest,
          status: 'pendiente',
          TB_client_membership: id_user
            ? {
                TB_user_role: {
                  id_user:
                    typeof id_user === 'string'
                      ? parseInt(id_user, 10)
                      : id_user,
                },
              }
            : undefined,
        },
        include: {
          TB_routines: {
            include: {
              TB_routine_exercise: {
                include: {
                  TB_exercises: true,
                },
              },
            },
          },
          TB_client_membership: {
            include: {
              TB_user_role: {
                include: {
                  TB_users: true,
                },
              },
            },
          },
        },
      })
      .then((reservations) =>
        reservations.map((res) => {
          const duration = res.TB_routines?.estimatedDuration ?? 0;
          const end_time = new Date(res.start_time);
          end_time.setMinutes(end_time.getMinutes() + duration);
          return { ...res, end_time };
        }),
      );
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
