import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarView } from 'angular-calendar';
import { DialogFormClientComponent } from '../../../../shared/components/dialog-form-client/dialog-form-client.component';
import { ActivateClientComponent } from '../activate-client/activate-client.component';
import { DialogViewReservationComponent } from '../../../../shared/components/dialog-view-reservation/dialog-view-reservation.component';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { UserServices } from '../../../../shared/services/users.service';
import { StorageKey } from '../../../../core/services/storage/storage.model';
import { CurrentTokenRole } from '../../../../core/interfaces/current-token-role.interface';
import { ClientService } from '../../../../shared/services/client.service';
import { MembershipClient } from '../../../../shared/interfaces/membership.interface';
import { User } from '../../../../shared/interfaces/user.interface';
import { Mode } from '../../../../core/interfaces/mode.enum';

@Component({
  selector: 'app-home-receptionist',
  standalone: false,
  templateUrl: './home-receptionist.component.html',
  styleUrl: './home-receptionist.component.scss',
})
export class HomeReceptionistComponent implements OnDestroy, OnInit {
  private subscription$: Subscription = new Subscription();
  private currentUser: CurrentTokenRole | null = null;

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  locale: string = 'es';
  weekStartsOn: number = 1;

  private dialog = inject(MatDialog);
  private storageService = inject(StorageService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private userService = inject(UserServices);
  private clientService = inject(ClientService);

  constructor() {}

  ngOnInit(): void {
    this.roleValidate();
  }

  private roleValidate() {
    this.currentUser = this.storageService.read(StorageKey.CURRENT_ROLE);

    if (this.currentUser?.id_role != 3) {
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
  }

  openAttendance() {
    const dialogRef = this.dialog.open(DialogViewReservationComponent, {//TODO: CAMBIAR DIALOG
      width: '80%',
      data: { data: {}, mode: Mode.update },
    });

    this.subscription$.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.handleAttendanceUpdate(result);
        }
      })
    );
  }

  handleAttendanceUpdate(result: Partial<MembershipClient>) {
    console.log('result', result);
  }

  openUser() {
    const dialogRef = this.dialog.open(DialogFormClientComponent, {
      width: '80%',
    });

    this.subscription$.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.handleUserUpdate(result);
        }
      })
    );
  }

  handleUserUpdate(result: User) {
    const { id_user, ...userData } = result;
    console.log(userData);
    this.subscription$.add(
      this.userService.updateUser(id_user, userData).subscribe({
        next: (_) => {
          this.snackBar.open(
            'El cliente ha sido actualizado correctamente.',
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
        },
        error: (error) => {
          console.log('Error:', error);
          this.snackBar.open(
            `${error.error.message ?? 'Error al crear el cliente.'}`,
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['error-snackbar'],
            }
          );
        },
      })
    );
  }

  activateUser() {
    const dialogRef = this.dialog.open(ActivateClientComponent, {
      width: '80%',
    });

    this.subscription$.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) this.handleClientActivation(result);
      })
    );
  }

  handleClientActivation(result: MembershipClient) {
    this.subscription$.add(
      this.clientService.createMembershipClient(result).subscribe({
        next: (_) => {
          this.snackBar.open(
            'El cliente ha sido activado correctamente.',
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
        },
        error: (error) => {
          console.log('Error:', error);
          this.snackBar.open(
            `${error.error.message ?? 'Error al activar el cliente.'}`,
            'Cerrar',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['error-snackbar'],
            }
          );
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
