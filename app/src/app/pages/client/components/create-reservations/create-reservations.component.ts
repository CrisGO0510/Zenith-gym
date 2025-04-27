import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarView } from 'angular-calendar';

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

  constructor(public dialog: MatDialog) {}

  hourSegmentClicked(event: { date: Date }): void {
    const clickedDate = event.date;
    console.log('Segmento clickeado:', clickedDate);

    // const dialogRef = this.dialog.open(TimeSlotDialogComponent, {
    //   width: '350px',
    //   data: { clickedDate: clickedDate },
    // });
    //
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('El diálogo se cerró', result);
    // });

    console.log('Clicked date:', clickedDate);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    // Lógica si usaras vista mensual (no aplica aquí)
  }
}
