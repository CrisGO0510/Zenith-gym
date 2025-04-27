import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reservation } from '../../../../core/interfaces/reservation.interface';

@Component({
  selector: 'app-upcoming-reservations',
  standalone: false,
  templateUrl: './upcoming-reservations.component.html',
  styleUrl: './upcoming-reservations.component.scss',
})
export class UpcomingReservationsComponent {
  // Recibe el array de reservaciones desde el componente padre
  @Input() reservations: Reservation[] = [];

  // Emite el ID de la reservación cuando se hace clic en "ver"
  @Output() viewReservation = new EventEmitter<Reservation>();

  // Emite el ID de la reservación cuando se hace clic en "eliminar"
  @Output() deleteReservation = new EventEmitter<number>();

  constructor() {}

  // Función trackBy para optimizar el @for
  trackById(index: number, item: Reservation): number {
    return item.id;
  }

  onViewClick(reservation: Reservation): void {
    this.viewReservation.emit(reservation);
  }

  onDeleteClick(id: number): void {
    console.log('Delete reservation:', id);
    // Probablemente quieras mostrar un diálogo de confirmación antes de emitir
    this.deleteReservation.emit(id);
  }
}
