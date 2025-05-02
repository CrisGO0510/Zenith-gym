import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ReservationStatus } from '../../../../shared/interfaces/reservation-status.enum';
import { Reservation } from '../../../../shared/interfaces/reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryClientService {
  constructor() {}

  getReservationHistory(clientId: number): Observable<Reservation[]> {
    console.log(`Simulando fetch del historial para cliente ID: ${clientId}`);

    const mockHistory: Reservation[] = []

    return of(mockHistory).pipe(delay(1200));
  }
}
