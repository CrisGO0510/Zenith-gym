import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarView } from 'angular-calendar';
import { DialogTrainingReservationComponent } from '../dialog-training-reservation/dialog-training-reservation.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-reservations',
  standalone: false,
  templateUrl: './create-reservations.component.html',
  styleUrl: './create-reservations.component.scss',
})
export class CreateReservationsComponent {
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events = [];
  weekStartsOn: number = 1;
  private subscription$: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  private isValidReservationTime(date: Date): boolean {
    const now = new Date();
    const minimumReservationTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    if (now.getMinutes() > 0) {
      minimumReservationTime.setTime(
        minimumReservationTime.getTime() - 60 * 60 * 1000,
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
        { duration: 5000 },
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
      }),
    );
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
