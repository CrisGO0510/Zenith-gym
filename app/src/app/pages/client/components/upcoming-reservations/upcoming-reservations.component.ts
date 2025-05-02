import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reservation } from '../../../../shared/interfaces/reservation.interface';

@Component({
  selector: 'app-upcoming-reservations',
  standalone: false,
  templateUrl: './upcoming-reservations.component.html',
  styleUrl: './upcoming-reservations.component.scss',
})
export class UpcomingReservationsComponent {
  @Input() reservations: Reservation[] = [];

  @Output() viewReservation = new EventEmitter<Reservation>();

  @Output() deleteReservation = new EventEmitter<number>();

  constructor() {}

  trackById(index: number, item: Reservation): number {
    return item.id;
  }

  onViewClick(reservation: Reservation): void {
    this.viewReservation.emit(reservation);
  }

  onDeleteClick(id: number): void {
    console.log('Delete reservation:', id);
    this.deleteReservation.emit(id);
  }
}
