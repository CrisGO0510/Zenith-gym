import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersRolesService extends CrudService {
  endpoint = 'users-roles';

  constructor(http: HttpClient) {
    super(http);
  }
}
