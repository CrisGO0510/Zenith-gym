import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends CrudService {
  endpoint = 'employees';

  constructor(http: HttpClient) {
    super(http);
  }

  getEmployees(): Observable<Employee[]> {
    return this.get<Employee[]>('');
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.post<Employee>(employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.patch<Employee>(id, employee);
  }
}
