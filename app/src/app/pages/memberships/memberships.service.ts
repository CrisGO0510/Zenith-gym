import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeMembership } from '../../core/interfaces/membership-type.interface';

@Injectable({
  providedIn: 'root',
})
export class MembershipsService extends CrudService {
  endpoint = 'memberships';

  constructor(http: HttpClient) {
    super(http);
  }

  getMemberships():Observable<TypeMembership[]> {
    return this.get<TypeMembership[]>('');
  }
}
