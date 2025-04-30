import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { HomeReceptionistComponent } from './components/home-receptionist/home-receptionist.component';
import { ActivateClientComponent } from './components/activate-client/activate-client.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CalendarModule } from 'angular-calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomeReceptionistComponent, ActivateClientComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    CalendarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class ReceptionistModule {}
