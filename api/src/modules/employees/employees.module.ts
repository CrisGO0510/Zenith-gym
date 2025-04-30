import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesService } from './services/employees.service';
import { EmployeesRepository } from './repositorios/employees.repository';
import { EmployeesPrisma } from './repositorios/implementations/employees.prisma';

@Module({
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    { provide: EmployeesRepository, useClass: EmployeesPrisma },
  ],
})
export class EmployeesModule {}
