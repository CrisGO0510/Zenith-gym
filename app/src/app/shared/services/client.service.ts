import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/http/crud.service';
import { HttpClient } from '@angular/common/http';
import { MembershipClient } from '../interfaces/membership.interface';
import { Observable } from 'rxjs';
import { Routine } from '../interfaces/routine.interface';
import { Reservation, ReservationCreate } from '../interfaces/reservation.interface';
import { ReservationStatus } from '../interfaces/reservation-status.enum';

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

  getClientById(id_user_role: number): Observable<MembershipClient[]> {
    this.endpoint = `clients`;
    return this.get<MembershipClient[]>(`?id_user_role=${id_user_role}`);
  }

  createMembershipClient(body: MembershipClient): Observable<MembershipClient> {
    this.endpoint = 'clients';
    return this.post<MembershipClient>(body);
  }

  getReservations(id_user: number): Observable<Reservation[]> {
    this.endpoint = 'reservations';
    return this.get<Reservation[]>(`pending?id_user=${id_user}`);
  }

  createReservation(body: ReservationCreate): Observable<unknown> {
    this.endpoint = 'reservations';
    return this.post<unknown>(body);
  }

  cancelReservation(id: number): Observable<Reservation> {
    this.endpoint = 'reservations';
    return this.patch<Reservation>(id, { status: ReservationStatus.CANCELLED });
  }
}
