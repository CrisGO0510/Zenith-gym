import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { UpcomingReservationsComponent } from './components/upcoming-reservations/upcoming-reservations.component';
import { CreateReservationsComponent } from './components/create-reservations/create-reservations.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalendarModule } from 'angular-calendar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    HomeClientComponent,
    UpcomingReservationsComponent,
    CreateReservationsComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NgxChartsModule,
    CalendarModule,
  ],
})
export class ClientModule {}
