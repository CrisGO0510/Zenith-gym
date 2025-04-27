import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { UpcomingReservationsComponent } from './components/upcoming-reservations/upcoming-reservations.component';
import { CreateReservationsComponent } from './components/create-reservations/create-reservations.component';
import { MatCardModule } from '@angular/material/card';
import { DialogCreateReservationComponent } from './components/dialog-create-reservation/dialog-create-reservation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    HomeClientComponent,
    UpcomingReservationsComponent,
    CreateReservationsComponent,
    DialogCreateReservationComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    NgxChartsModule,
  ],
})
export class ClientModule {}
