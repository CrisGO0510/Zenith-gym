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
import { DialogTrainingReservationComponent } from './components/dialog-training-reservation/dialog-training-reservation.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HistoryClientComponent } from './components/history-client/history-client.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HomeClientComponent,
    UpcomingReservationsComponent,
    CreateReservationsComponent,
    DialogTrainingReservationComponent,
    HistoryClientComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    NgxChartsModule,
    CalendarModule,
  ],
})
export class ClientModule {}
