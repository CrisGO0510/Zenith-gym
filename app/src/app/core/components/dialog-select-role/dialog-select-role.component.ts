import { Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogEmployeeComponent } from '../../../pages/administrative/components/dialog-employee/dialog-employee.component';
import { SendDataDialog } from '../../interfaces/send-data-dialog';
import { TokenRole } from '../../interfaces/token-role.interface';
import { Role } from '../../services/role/role.interfaces';
import { Subscription } from 'rxjs';
import { RoleService } from '../../services/role/role.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from '../../services/storage/storage.service';
import { CurrentTokenRole } from '../../interfaces/current-token-role.interface';
import { StorageKey } from '../../services/storage/storage.model';

@Component({
  selector: 'app-dialog-select-role',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './dialog-select-role.component.html',
  styleUrl: './dialog-select-role.component.scss',
})
export class DialogSelectRoleComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  roles: Role[] = [];

  private roleService = inject(RoleService);
  private storageService = inject(StorageService);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SendDataDialog<TokenRole>,
    private dialogRef: MatDialogRef<DialogEmployeeComponent>
  ) {}

  ngOnInit(): void {
    for (const id_role of this.data.data.id_role) {
      this.getRoles(id_role);
    }
  }

  getRoles(id_role: number) {
    this.subscription$.add(
      this.roleService.getRoleById(id_role).subscribe({
        next: (data) => {
          this.roles.push(...data);
        },
        error: (err) => {
          console.error('Error fetching roles:', err);
        },
      })
    );
  }

  selectRole(idRole: number) {
    console.log('Selected role:', idRole);
    const index = this.data.data.id_role.indexOf(idRole);

    const currentTokenRole: CurrentTokenRole = {
      id_user: this.data.data.id_user,
      id_user_role: this.data.data.id_user_role[index],
      id_role: idRole,
    };

    this.storageService.save(StorageKey.CURRENT_ROLE, currentTokenRole);
    this.closeDialog(idRole);
  }

  closeDialog(idRole: number) {
    let route = '';
    switch (idRole) {
      case 1:
        route = '/client';
        break;
      case 2:
        route = '/administrative';
        break;
      case 3:
        route = '/receptionist';
        break;
      default:
        route = '/home';
        console.error('Unknown role ID:', idRole);
    }

    this.dialogRef.close(route);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
