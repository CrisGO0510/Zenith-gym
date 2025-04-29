import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { HomeReceptionistComponent } from './components/home-receptionist/home-receptionist.component';
import { ActivateClientComponent } from './components/activate-client/activate-client.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [HomeReceptionistComponent, ActivateClientComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CalendarModule,
  ],
})
export class ReceptionistModule {}
