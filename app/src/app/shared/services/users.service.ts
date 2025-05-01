import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserServices extends CrudService {
  endpoint = 'users';

  constructor(http: HttpClient) {
    super(http);
  }

  getUsers() {
    return this.get('');
  }

  getUserById(id: number): Observable<User[]> {
    return this.get<User[]>(`?id_user=${id}`);
  }

  updateUser(id: number, body: Omit<User, 'id_user'>): Observable<User> {
    return this.patch<User>(`/${id}`, body);
  }
}
