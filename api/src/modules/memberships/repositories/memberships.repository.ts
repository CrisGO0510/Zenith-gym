import { Prisma, TB_memberships } from 'generated/prisma';

export abstract class MembershipsRepository {
  abstract get(where: Prisma.TB_membershipsWhereInput): Promise<TB_memberships[]>;
  abstract create(data: Prisma.TB_membershipsCreateInput): Promise<TB_memberships>;
  abstract update(
    where: Prisma.TB_membershipsWhereUniqueInput,
    data: Prisma.TB_membershipsUpdateInput,
  ): Promise<TB_memberships>;
  abstract delete(where: Prisma.TB_membershipsWhereUniqueInput): Promise<TB_memberships>;
}
