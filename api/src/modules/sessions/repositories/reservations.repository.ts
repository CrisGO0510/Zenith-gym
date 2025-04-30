import { Prisma, TB_reservations } from 'generated/prisma';

export abstract class ReservationsRepository {
  abstract get(
    where: Prisma.TB_reservationsWhereInput,
  ): Promise<TB_reservations[]>;
  abstract create(
    data: Prisma.TB_reservationsUncheckedCreateInput,
  ): Promise<TB_reservations>;
  abstract update(
    where: Prisma.TB_reservationsWhereUniqueInput,
    data: Prisma.TB_reservationsUncheckedUpdateInput,
  ): Promise<TB_reservations>;
  abstract delete(
    where: Prisma.TB_reservationsWhereUniqueInput,
  ): Promise<TB_reservations>;
}
