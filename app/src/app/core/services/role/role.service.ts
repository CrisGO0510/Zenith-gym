import { Injectable } from '@angular/core';
import { CrudService } from '../http/crud.service';
import { HttpClient } from '@angular/common/http';
import { Role } from './role.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends CrudService {
  endpoint = 'roles';

  constructor(http: HttpClient) {
    super(http);
  }

  getRoles(): Observable<Role[]> {
    return this.get<Role[]>('');
  }

  getEmployeeRoles(): Observable<Role[]> {
    return this.get<Role[]>('employees');
  }

  getRoleById(id: number): Observable<Role[]> {
    return this.get<Role[]>(`?id_role=${id}`);
  }
}
