import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogEditUserComponent } from '../core/components/dialog-edit-user/dialog-edit-user.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnDestroy {
  private subscription$: Subscription = new Subscription();

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {}

  navigateTo(path: string) {
    console.log('Navigating to:', path);
    this.router.navigate([path]);
  }

  editUser() {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      width: '80%',
    });

    this.subscription$.add(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log('User edited:', result);
        } else {
          console.log('Edit user dialog closed without changes');
        }
      }),
    );
  }

  logout() {
    console.log('Logging out...');
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
