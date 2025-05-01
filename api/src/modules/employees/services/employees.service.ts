import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from '../repositorios/employees.repository';
import { GetEmployeesType } from '../types/get.employees.type';
import { UpdateEmployeesType } from '../types/update.employees.type';
import { CreateEmployeesDto } from '../dtos/create.employees.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly clients: EmployeesRepository) {}

  public get(where: GetEmployeesType) {
    return this.clients.get(where);
  }

  public create(data: CreateEmployeesDto) {
    return this.clients.create(data);
  }

  public update(where: { id: number }, data: UpdateEmployeesType) {
    return this.clients.update(where, data);
  }

  public delete(where: { id: number }) {
    return this.clients.delete(where);
  }
}
