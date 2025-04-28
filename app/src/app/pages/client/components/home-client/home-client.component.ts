import { Component } from '@angular/core';
import { Client } from '../../../../core/interfaces/client.interface';
import { Reservation } from '../../../../core/interfaces/reservation.interface';
import { DialogViewReservationComponent } from '../../../../core/components/dialog-view-reservation/dialog-view-reservation.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-client',
  standalone: false,
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss',
})
export class HomeClientComponent {
  private suscription$: Subscription = new Subscription();

  user: Client = {
    userId: 1,
    name: 'John',
    lastname: 'Doe',
    email: 'cris@gmal.com',
    password: '123456',
    phone: '123456789',
    birthdate: new Date('1990-01-01'),
    clientId: 1,
    thirdPartyId: 1,
    membershipId: 1,
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-01-01'),
  };

  reservations: Reservation[] = [
    {
      id: 1,
      clientId: 1,
      clientName: 'John',
      clientLastName: 'Doe',
      routineId: 1,
      routineName: 'Yoga',
      instructorId: 1,
      instructorName: 'Jane',
      instructorLastName: 'Smith',
      routineDescription: 'Relaxing yoga session',
      startDate: new Date('2023-10-01T10:00:00'),
      endDate: new Date('2023-10-01T11:00:00'),
      reservationStatusId: 1,
      reservationStatus: 'Confirmed',
    },
    {
      id: 2,
      clientId: 1,
      clientName: 'John',
      clientLastName: 'Doe',
      routineId: 2,
      routineName: 'Pilates',
      instructorId: 2,
      instructorName: 'Alice',
      instructorLastName: 'Johnson',
      routineDescription: 'Intense pilates session',
      startDate: new Date('2023-10-02T12:00:00'),
      endDate: new Date('2023-10-02T13:00:00'),
      reservationStatusId: 2,
      reservationStatus: 'Pending',
    },
    {
      id: 3,
      clientId: 1,
      clientName: 'John',
      clientLastName: 'Doe',
      routineId: 3,
      routineName: 'Zumba',
      instructorId: 3,
      instructorName: 'Bob',
      instructorLastName: 'Brown',
      routineDescription: 'Fun zumba class',
      startDate: new Date('2023-10-03T14:00:00'),
      endDate: new Date('2023-10-03T15:00:00'),
      reservationStatusId: 3,
      reservationStatus: 'Cancelled',
    },
  ];

  constructor(private dialog: MatDialog) {}

  viewReservation(reservation: Reservation): void {
    if (!reservation) {
      console.error(
        'Intento de abrir diálogo con datos de reserva nulos o indefinidos.',
      );
      return;
    }

    this.dialog.open(DialogViewReservationComponent, {
      width: '80%',
      data: { reservation: reservation },
    });
  }

  ngOnDestroy(): void {
    this.suscription$.unsubscribe();
  }
}
