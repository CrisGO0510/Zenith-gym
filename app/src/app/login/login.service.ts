import { Injectable } from '@angular/core';
import { CrudService } from '../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginBody } from '../core/interfaces/login-body';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends CrudService{
endpoint = "auth/login";

constructor(http: HttpClient) {
  super(http);
}

login(credentials: LoginBody): Observable<any> {
  return this.post<LoginBody>(credentials);
}

}
