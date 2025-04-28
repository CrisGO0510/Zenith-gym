import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-home-receptionist',
  standalone: false,
  templateUrl: './home-receptionist.component.html',
  styleUrl: './home-receptionist.component.scss',
})
export class HomeReceptionistComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  locale: string = 'es';
  weekStartsOn: number = 1;
}
