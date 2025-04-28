import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ReservationStatus } from '../../../../core/interfaces/reservation-status.enum';
import { Reservation } from '../../../../core/interfaces/reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryClientService {
  constructor() {}

  getReservationHistory(clientId: number): Observable<Reservation[]> {
    console.log(`Simulando fetch del historial para cliente ID: ${clientId}`);

    const mockHistory: Reservation[] = [
      {
        id: 101,
        clientId: clientId,
        clientName: 'John',
        clientLastName: 'Doe',
        routineId: 1,
        routineName: 'Pecho y Tríceps',
        instructorId: 1,
        instructorName: 'Jane',
        instructorLastName: 'Smith',
        routineDescription: 'Desc...',
        startDate: new Date(2024, 3, 15, 9, 0),
        endDate: new Date(2024, 3, 15, 10, 0),
        reservationStatusId: ReservationStatus.COMPLETED,
        reservationStatus: 'Completada',
      },
      {
        id: 102,
        clientId: clientId,
        clientName: 'John',
        clientLastName: 'Doe',
        routineId: 2,
        routineName: 'Espalda y Bíceps',
        instructorId: 1,
        instructorName: 'Jane',
        instructorLastName: 'Smith',
        routineDescription: 'Desc...',
        startDate: new Date(2024, 3, 17, 10, 0),
        endDate: new Date(2024, 3, 17, 11, 0),
        reservationStatusId: ReservationStatus.COMPLETED,
        reservationStatus: 'Completada',
      },
      {
        id: 103,
        clientId: clientId,
        clientName: 'John',
        clientLastName: 'Doe',
        routineId: 3,
        routineName: 'Pierna Completa',
        instructorId: 2,
        instructorName: 'Peter',
        instructorLastName: 'Jones',
        routineDescription: 'Desc...',
        startDate: new Date(2024, 3, 19, 11, 0),
        endDate: new Date(2024, 3, 19, 12, 0),
        reservationStatusId: ReservationStatus.ABSENT,
        reservationStatus: 'Ausente',
      },
      {
        id: 104,
        clientId: clientId,
        clientName: 'John',
        clientLastName: 'Doe',
        routineId: 1,
        routineName: 'Pecho y Tríceps',
        instructorId: 1,
        instructorName: 'Jane',
        instructorLastName: 'Smith',
        routineDescription: 'Desc...',
        startDate: new Date(2024, 3, 22, 9, 0),
        endDate: new Date(2024, 3, 22, 10, 0),
        reservationStatusId: ReservationStatus.COMPLETED,
        reservationStatus: 'Completada',
      },
      {
        id: 105,
        clientId: clientId,
        clientName: 'John',
        clientLastName: 'Doe',
        routineId: 4,
        routineName: 'Hombro y Trapecio',
        instructorId: 2,
        instructorName: 'Peter',
        instructorLastName: 'Jones',
        routineDescription: 'Desc...',
        startDate: new Date(2024, 3, 24, 10, 0),
        endDate: new Date(2024, 3, 24, 11, 0),
        reservationStatusId: ReservationStatus.CANCELLED,
        reservationStatus: 'Cancelada',
      },
      {
        id: 106,
        clientId: clientId,
        clientName: 'John',
        clientLastName: 'Doe',
        routineId: 5,
        routineName: 'Full Body Básico',
        instructorId: 1,
        instructorName: 'Jane',
        instructorLastName: 'Smith',
        routineDescription: 'Desc...',
        startDate: new Date(2024, 3, 26, 11, 0),
        endDate: new Date(2024, 3, 26, 12, 0),
        reservationStatusId: ReservationStatus.PENDING,
        reservationStatus: 'Pendiente',
      },
      {
        id: 107,
        clientId: clientId,
        clientName: 'John',
        clientLastName: 'Doe',
        routineId: 1,
        routineName: 'Pecho y Tríceps',
        instructorId: 1,
        instructorName: 'Jane',
        instructorLastName: 'Smith',
        routineDescription: 'Desc...',
        startDate: new Date(2024, 3, 29, 9, 0),
        endDate: new Date(2024, 3, 29, 10, 0),
        reservationStatusId: ReservationStatus.PENDING,
        reservationStatus: 'Pendiente',
      },
    ];

    return of(mockHistory).pipe(delay(1200));
  }
}
