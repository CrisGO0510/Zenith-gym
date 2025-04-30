import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipsRoutingModule } from './memberships-routing.module';
import { MembershipsComponent } from './memberships.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [MembershipsComponent],
  imports: [CommonModule, MembershipsRoutingModule, MatExpansionModule],
})
export class MembershipsModule {}
