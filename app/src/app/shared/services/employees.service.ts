import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends CrudService {
  endpoint = 'employees';

  constructor(http: HttpClient) {
    super(http);
  }

  // getEmployees
}
