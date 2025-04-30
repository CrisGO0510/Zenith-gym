import { PrismaService } from 'src/core/prisma/prisma.service';
import { RolesRepository } from '../roles.repository';
import { Prisma, TB_role } from 'generated/prisma';

export class RolesPrisma implements RolesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(where: Prisma.TB_roleWhereInput): Promise<TB_role[]> {
    return this.prisma.tB_role.findMany({
      where,
    });
  }

  public async create(data: Prisma.TB_roleCreateInput): Promise<TB_role> {
    return this.prisma.tB_role.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_roleWhereUniqueInput,
    data: Prisma.TB_roleUpdateInput,
  ): Promise<TB_role> {
    return this.prisma.tB_role.update({
      where,
      data,
    });
  }

  public async delete(where: Prisma.TB_roleWhereUniqueInput): Promise<TB_role> {
    return this.prisma.tB_role.delete({
      where,
    });
  }
}
