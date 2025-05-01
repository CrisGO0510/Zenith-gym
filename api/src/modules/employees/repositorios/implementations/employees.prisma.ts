import { PrismaService } from 'src/core/prisma/prisma.service';
import { EmployeesRepository } from '../employees.repository';
import { Prisma, TB_employees } from 'generated/prisma';
import { Injectable } from '@nestjs/common';
import { CreateEmployeesDto } from '../../dtos/create.employees.dto';

@Injectable()
export class EmployeesPrisma implements EmployeesRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_employeesWhereInput,
  ): Promise<TB_employees[]> {
    return this.prisma.tB_employees.findMany({
      where,
      include: {
        TB_user_role: true,
      },
    });
  }

  public async create(
    data: CreateEmployeesDto
  ): Promise<TB_employees> {
    // 1. Verificar si ya existe user-role
    const existingRole = await this.prisma.tB_user_role.findFirst({
      where: {
        id_user: data.userId,
        id_role: data.employeeTypeId,
      },
    });
  
    // 2. Usar el existente o crear uno nuevo
    const userRole = existingRole
      ? existingRole
      : await this.prisma.tB_user_role.create({
          data: {
            id_user: data.userId,
            id_role: data.employeeTypeId,
          },
        });
  
    // 3. Crear el empleado con id_user_role generado
    return this.prisma.tB_employees.create({
      data: {
        id_user_role: userRole.id_user_role,
        bio: data.biography,
        specialization: data.specialty,
        date_entry: new Date(data.date_entry),
      },
    });
  }
  

  public async update(
    where: Prisma.TB_employeesWhereUniqueInput,
    data: Prisma.TB_employeesUncheckedUpdateInput,
  ): Promise<TB_employees> {
    return this.prisma.tB_employees.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_employeesWhereUniqueInput,
  ): Promise<TB_employees> {
    return this.prisma.tB_employees.delete({
      where,
    });
  }
}
