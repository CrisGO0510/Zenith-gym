import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { MembershipClient } from '../interfaces/membership.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends CrudService {
  endpoint = '';

  constructor(http: HttpClient) {
    super(http);
  }

  getRoutines() {
    this.endpoint = 'routines';
    return this.get<any>('');
  }

  getExerciseById(exerciseId: number) {
    this.endpoint = 'exercises';
    return this.get(`${exerciseId}`);
  }

  createMembershipClient(body: MembershipClient): Observable<MembershipClient> {
    this.endpoint = 'clients';
    return this.post<MembershipClient>(body);
  }
}
