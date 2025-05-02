import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from '../../../../shared/interfaces/reservation.interface';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Mode } from '../../../../core/interfaces/mode.enum';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { StorageKey } from '../../../../core/services/storage/storage.model';
import { Router } from '@angular/router';
import { DialogViewReservationComponent } from '../../../../shared/components/dialog-view-reservation/dialog-view-reservation.component';
import { CurrentTokenRole } from '../../../../core/interfaces/current-token-role.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../../../shared/services/client.service';

@Component({
  selector: 'app-home-client',
  standalone: false,
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.scss',
})
export class HomeClientComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  private currentUser: CurrentTokenRole | null = null;
  id_client_membership: number = 0;

  reservations: Reservation[] = [];

  private dialog = inject(MatDialog);
  private storageService = inject(StorageService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private clientService = inject(ClientService);

  constructor() {}

  navigateTo(path: string) {
    console.log('Navigating to:', path);
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.roleValidate();
    this.getReservations();
  }

  getReservations() {
    if (!this.currentUser) {
      console.error(
        'currentUser is null or undefined. Cannot fetch reservations.'
      );
      return;
    }

    this.subscription$.add(
      this.clientService.getReservations(this.currentUser.id_user).subscribe({
        next: (reservations) => {
          this.reservations = reservations;
        },
        error: (error) => {
          console.error('Error fetching reservations:', error);
        },
      })
    );
  }

  private roleValidate() {
    this.currentUser = this.storageService.read(StorageKey.CURRENT_ROLE);

    if (!this.currentUser) {
      console.error('No tienes permisos para acceder a esta página.');
      this.router.navigate(['/']);
      return;
    }

    if (this.currentUser?.id_role != 1) {
      this.snackBar.open(
        'No tienes permisos para acceder a esta página',
        'Cerrar',
        {
          duration: 3000,
          verticalPosition: 'top',
        }
      );
      this.router.navigate(['/']);
    }

    this.subscription$.add(
      this.clientService
        .getClientById(this.currentUser.id_user_role)
        .subscribe({
          next: (client) => {
            if (client.length === 0) {
              this.snackBar.open(
                'Su membresía ha caducado, por favor contáctese con el recepcionista',
                'Cerrar',
                {
                  duration: 3000,
                  verticalPosition: 'top',
                }
              );
              this.router.navigate(['/']);
              return;
            }

            this.id_client_membership = client[0].id;
          },
          error: (error) => {
            console.error('Error fetching client:', error);
            this.snackBar.open(
              'Su membresía ha caducado, por favor contáctese con el recepcionista',
              'Cerrar',
              {
                duration: 3000,
                verticalPosition: 'top',
              }
            );
          },
        })
    );
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
      data: { data: reservation, mode: Mode.read },
    });
  }

  cancelReservation(id: number) {
    this.subscription$.add(
      this.clientService.cancelReservation(id).subscribe({
        next: () => {
          this.snackBar.open('Reserva cancelada', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
          });
          this.getReservations();
        },
        error: (error) => {
          console.error('Error canceling reservation:', error);
          this.snackBar.open('Error al cancelar la reserva', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
          });
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
