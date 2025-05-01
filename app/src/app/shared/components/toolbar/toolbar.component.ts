import { Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrentTokenRole } from '../../../core/interfaces/current-token-role.interface';
import { StorageKey } from '../../../core/services/storage/storage.model';
import { StorageService } from '../../../core/services/storage/storage.service';
import { DialogFormClientComponent } from '../dialog-form-client/dialog-form-client.component';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnDestroy, OnInit {
  currentUser: CurrentTokenRole | null = null;

  private subscription$: Subscription = new Subscription();
  private storageService = inject(StorageService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  constructor() {}

  ngOnInit() {
    this.subscription$.add(
      this.storageService.currentRole$.subscribe((role) => {
        this.currentUser = role;
      })
    );
  }

  navigateTo(path: string) {
    console.log('Navigating to:', path);
    this.router.navigate([path]);
  }

  editUser() {
    const dialogRef = this.dialog.open(DialogFormClientComponent, {
      width: '80%',
    });

    this.subscription$.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log('User edited:', result);
        } else {
          console.log('Edit user dialog closed without changes');
        }
      })
    );
  }

  logout() {
    this.storageService.remove(StorageKey.CURRENT_ROLE);

    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
