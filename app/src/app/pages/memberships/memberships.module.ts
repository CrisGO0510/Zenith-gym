import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipsRoutingModule } from './memberships-routing.module';
import { MembershipsComponent } from './memberships.component';

@NgModule({
  declarations: [MembershipsComponent],
  imports: [CommonModule, MembershipsRoutingModule],
})
export class MembershipsModule {}
