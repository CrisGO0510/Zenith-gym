import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    console.log('Navigating to:', path);
    this.router.navigate([path]);
  }

  logout() {
    console.log('Logging out...');
  }
}
