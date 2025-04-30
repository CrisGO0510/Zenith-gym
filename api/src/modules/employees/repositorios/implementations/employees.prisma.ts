import { PrismaService } from 'src/core/prisma/prisma.service';
import { EmployeesRepository } from '../employees.repository';
import { Prisma, TB_employees } from 'generated/prisma';
import { Injectable } from '@nestjs/common';

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
    data: Prisma.TB_employeesUncheckedCreateInput,
  ): Promise<TB_employees> {
    return this.prisma.tB_employees.create({
      data,
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
