import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../../shared/interfaces/reservation.interface';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Mode } from '../../../../core/interfaces/mode.enum';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { StorageKey } from '../../../../core/services/storage/storage.model';
import { Router } from '@angular/router';
import { DialogViewReservationComponent } from '../../../../shared/components/dialog-view-reservation/dialog-view-reservation.component';

@Component({
  selector: 'app-home-client',
  standalone: false,
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss',
})
export class HomeClientComponent implements OnInit {
  private subscription$: Subscription = new Subscription();

  user: any;

  reservations: Reservation[] = [
    {
      id: 1,
      clientId: 101,
      clientName: 'Laura',
      clientLastName: 'Martínez',
      routineId: 201,
      routineName: 'Rutina Full Body',
      instructorId: 301,
      instructorName: 'Carlos',
      instructorLastName: 'Gómez',
      routineDescription: 'Entrenamiento general para todo el cuerpo',
      startDate: new Date('2025-05-01T08:00:00'),
      endDate: new Date('2025-05-01T09:00:00'),
      reservationStatusId: 1,
      reservationStatus: 'Confirmado'
    },
    {
      id: 2,
      clientId: 102,
      clientName: 'Pedro',
      clientLastName: 'López',
      routineId: 202,
      routineName: 'Piernas Intensivo',
      instructorId: 302,
      instructorName: 'Andrea',
      instructorLastName: 'Vargas',
      routineDescription: 'Enfocado en fuerza y volumen de piernas',
      startDate: new Date('2025-05-02T10:30:00'),
      endDate: new Date('2025-05-02T11:30:00'),
      reservationStatusId: 2,
      reservationStatus: 'Pendiente'
    },
  ];

  constructor(
    private dialog: MatDialog,
    private storageService: StorageService,
    private router: Router
  ) {}

  navigateTo(path: string) {
    console.log('Navigating to:', path);
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    const user = this.storageService.read(StorageKey.CURRENT_ROLE);
  
    if (user) {
      this.user = user;
    } else {
      console.error('No se encontró el usuario en el almacenamiento.');
      this.navigateTo('/');
    }
  }
  

  viewReservation(reservation: Reservation): void {
    if (!reservation) {
      console.error(
        'Intento de abrir diálogo con datos de reserva nulos o indefinidos.'
      );
      return;
    }

    this.dialog.open(DialogViewReservationComponent, {
      width: '80%',
      data: { reservation: reservation, mode: Mode.update },
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
