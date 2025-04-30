import { Prisma, TB_session_capacity } from 'generated/prisma';

export abstract class SessionCapacityRepository {
  abstract get(
    where: Prisma.TB_session_capacityWhereInput,
  ): Promise<TB_session_capacity[]>;
  abstract create(
    data: Prisma.TB_session_capacityUncheckedCreateInput,
  ): Promise<TB_session_capacity>;
  abstract update(
    where: Prisma.TB_session_capacityWhereUniqueInput,
    data: Prisma.TB_session_capacityUncheckedUpdateInput,
  ): Promise<TB_session_capacity>;
  abstract delete(
    where: Prisma.TB_session_capacityWhereUniqueInput,
  ): Promise<TB_session_capacity>;
}
