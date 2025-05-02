import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarView } from 'angular-calendar';
import { DialogTrainingReservationComponent } from '../dialog-training-reservation/dialog-training-reservation.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ClientService } from '../../../../shared/services/client.service';
import {
  Reservation,
  ReservationCreate,
} from '../../../../shared/interfaces/reservation.interface';
import { ReservationStatus } from '../../../../shared/interfaces/reservation-status.enum';

@Component({
  selector: 'app-create-reservations',
  standalone: false,
  templateUrl: './create-reservations.component.html',
  styleUrl: './create-reservations.component.scss',
})
export class CreateReservationsComponent {
  @Input() id_client_membership!: number;

  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events = [];
  weekStartsOn: number = 1;

  private subscription$: Subscription = new Subscription();
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private clientService = inject(ClientService);

  constructor() {}

  private isValidReservationTime(date: Date): boolean {
    const now = new Date();
    const minimumReservationTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    if (now.getMinutes() > 0) {
      minimumReservationTime.setTime(
        minimumReservationTime.getTime() - 60 * 60 * 1000
      );
    }

    return date.getTime() >= minimumReservationTime.getTime();
  }

  hourSegmentClicked(event: { date: Date }): void {
    const clickedDate = event.date;

    if (!this.isValidReservationTime(clickedDate)) {
      this.snackBar.open(
        'Las reservas deben hacerse con al menos 1 hora de anticipación y para la próxima hora en punto disponible',
        'Cerrar',
        { duration: 5000, verticalPosition: 'top' }
      );
      return;
    }

    const dialogRef = this.dialog.open(DialogTrainingReservationComponent, {
      width: '80%',
      data: { selectedDate: clickedDate },
    });

    this.subscription$.add(
      dialogRef.afterClosed().subscribe((result) => {
        console.log('El diálogo se cerró', result);
        if (result) {
          this.createReservation(result);
        } else {
          console.log('No se seleccionó ninguna reserva');
        }
      })
    );
  }

  createReservation(reservation: any) {
    const body: ReservationCreate = {
      id_client_membership: this.id_client_membership,
      id_routine: reservation.selectedRoutineId,
      start_time: reservation.selectedDate,
      status: ReservationStatus.PENDING,
    };

    this.subscription$.add(
      this.clientService.createReservation(body).subscribe({
        next: () => {
          this.snackBar.open('Reserva creada', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
          });
          window.location.reload();
        },
        error: (error) => {
          console.error('Error al crear la reserva:', error);
          this.snackBar.open('Error al crear la reserva', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
          });
        },
      })
    );
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
