import { Prisma, TB_employees } from 'generated/prisma';

export abstract class EmployeesRepository {
  abstract get(where: Prisma.TB_employeesWhereInput): Promise<TB_employees[]>;
  abstract create(data: Prisma.TB_employeesUncheckedCreateInput): Promise<TB_employees>;
  abstract update(
    where: Prisma.TB_employeesWhereUniqueInput,
    data: Prisma.TB_employeesUncheckedUpdateInput,
  ): Promise<TB_employees>;
  abstract delete(where: Prisma.TB_employeesWhereUniqueInput): Promise<TB_employees>;
}
