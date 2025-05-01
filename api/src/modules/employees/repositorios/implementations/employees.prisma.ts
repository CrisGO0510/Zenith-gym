import { PrismaService } from 'src/core/prisma/prisma.service';
import { EmployeesRepository } from '../employees.repository';
import { Prisma, TB_employees } from 'generated/prisma';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
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

  public async create(data: CreateEmployeesDto): Promise<TB_employees> {
    const { TB_user_role, bio, specialization, date_entry } = data;

    if (!TB_user_role?.id_user || !TB_user_role?.id_role) {
      throw new BadRequestException('Faltan id_user o id_role');
    }

    // 1. Buscar o crear la relación user-role
    const existingRole = await this.prisma.tB_user_role.findFirst({
      where: {
        id_user: TB_user_role.id_user,
        id_role: TB_user_role.id_role,
      },
    });

    const userRole =
      existingRole ??
      (await this.prisma.tB_user_role.create({
        data: {
          id_user: TB_user_role.id_user,
          id_role: TB_user_role.id_role,
        },
      }));

    // 2. Verificar si ya existe un empleado con ese id_user_role
    const existingEmployee = await this.prisma.tB_employees.findUnique({
      where: {
        id_user_role: userRole.id_user_role,
      },
    });

    if (existingEmployee) {
      throw new ConflictException(
        'El usuario ya tiene un registro de empleado para ese rol.',
      );
    }

    // 3. Crear el empleado
    return this.prisma.tB_employees.create({
      data: {
        id_user_role: userRole.id_user_role,
        bio,
        specialization,
        date_entry: new Date(date_entry),
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
