import { PrismaService } from 'src/core/prisma/prisma.service';
import { UsersRolesRepository } from '../users_roles.repository';
import { Prisma, TB_user_role } from 'generated/prisma';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersRolesPrisma implements UsersRolesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(where: Prisma.TB_user_roleWhereInput): Promise<any[]> {
    const results = await this.prisma.tB_user_role.findMany({
      where,
      include: {
        TB_users: true,
        TB_role: true,
        TB_employees: true,
        TB_client_membership: true,
      },
    });

    if (!results || results.length === 0) return [];

    const map = new Map<number, {
      id_user: number;
      id_user_role: number[];
      id_role: number[];
      password: string;
    }>();

    for (const r of results) {
      if (!map.has(r.id_user)) {
        map.set(r.id_user, {
          id_user: r.id_user,
          id_user_role: [],
          id_role: [],
          password: r.TB_users.password,
        });
      }

      const group = map.get(r.id_user)!; 
      group.id_user_role.push(r.id_user_role);
      group.id_role.push(r.id_role);
    }

    return Array.from(map.values());
  }
  

  public async create(
    data: Prisma.TB_user_roleUncheckedCreateInput,
  ): Promise<TB_user_role> {
    const existing = await this.prisma.tB_user_role.findFirst({
      where: {
        id_user: data.id_user,
        id_role: data.id_role,
      },
    });
  
    if (existing) {
      throw new ConflictException('Ya existe esta relación de usuario y rol');
    }
  
    // Crear solo si no existe
    return this.prisma.tB_user_role.create({
      data: {
        id_user: data.id_user,
        id_role: data.id_role,
      },
    });
  }


  public async update(
    where: Prisma.TB_user_roleWhereUniqueInput,
    data: Prisma.TB_user_roleUpdateInput,
  ): Promise<TB_user_role> {
    return this.prisma.tB_user_role.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_user_roleWhereUniqueInput,
  ): Promise<TB_user_role> {
    return this.prisma.tB_user_role.delete({
      where,
    });
  }
}
