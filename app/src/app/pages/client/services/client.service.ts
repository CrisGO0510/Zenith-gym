import { Injectable } from '@angular/core';
import { CrudService } from '../../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';

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

  postCapacity(body: any) {
    this.endpoint = 'session-capacity';
    return this.post<any>(body);
  }

}
