import { Prisma, TB_employees } from 'generated/prisma';
import { CreateEmployeesDto } from '../dtos/create.employees.dto';

export abstract class EmployeesRepository {
  abstract get(where: Prisma.TB_employeesWhereInput): Promise<TB_employees[]>;
  abstract create(data: CreateEmployeesDto): Promise<TB_employees>;
  abstract update(
    where: Prisma.TB_employeesWhereUniqueInput,
    data: Prisma.TB_employeesUncheckedUpdateInput,
  ): Promise<TB_employees>;
  abstract delete(where: Prisma.TB_employeesWhereUniqueInput): Promise<TB_employees>;
}
