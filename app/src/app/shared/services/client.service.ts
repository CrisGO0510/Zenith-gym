import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { MembershipClient } from '../interfaces/membership.interface';
import { Observable } from 'rxjs';
import { Routine } from '../interfaces/routine.interface';
import { Reservation } from '../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends CrudService {
  endpoint = '';

  constructor(http: HttpClient) {
    super(http);
  }

  getRoutines(): Observable<Routine[]> {
    this.endpoint = 'routines';
    return this.get<Routine[]>('');
  }

  getClientById(id: number): Observable<MembershipClient> {
    this.endpoint = `clients`;
    return this.get<MembershipClient>(`?id_user=${id}`);
  }

  createMembershipClient(body: MembershipClient): Observable<MembershipClient> {
    this.endpoint = 'clients';
    return this.post<MembershipClient>(body);
  }

  getReservations(id_user: number): Observable<Reservation[]> {
    this.endpoint = 'reservations';
    return this.get<Reservation[]>(`?id_user=${id_user}`);
  }
}
