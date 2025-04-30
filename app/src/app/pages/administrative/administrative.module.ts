import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { DialogEmployeeComponent } from './components/dialog-employee/dialog-employee.component';
import { HomeAdministrativeComponent } from './components/home-administrative/home-administrative.component';
import { TableEmployeeComponent } from './components/table-employee/table-employee.component';


@NgModule({
  declarations: [
    DialogEmployeeComponent,
    HomeAdministrativeComponent,
    TableEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule
  ]
})
export class AdministrativeModule { }
