import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { DialogEmployeeComponent } from './components/dialog-employee/dialog-employee.component';
import { HomeAdministrativeComponent } from './components/home-administrative/home-administrative.component';
import { TableEmployeeComponent } from './components/table-employee/table-employee.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DialogEmployeeComponent,
    HomeAdministrativeComponent,
    TableEmployeeComponent,
  ],
  imports: [CommonModule, AdministrativeRoutingModule, MatCardModule, MatButtonModule ],
})
export class AdministrativeModule {}
