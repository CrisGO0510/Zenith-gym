import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministrativeComponent } from './components/home-administrative/home-administrative.component';

const routes: Routes = [{ path: '', component: HomeAdministrativeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativeRoutingModule {}
