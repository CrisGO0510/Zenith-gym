import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { UsersRolesBody } from '../interfaces/user-roles-body.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersRolesService extends CrudService {
  endpoint = 'users-roles';

  constructor(http: HttpClient) {
    super(http);
  }

  createUserRole(usersRolesBody: UsersRolesBody): Observable<UsersRolesBody> {
    return this.post<UsersRolesBody>(usersRolesBody);
  }
}
