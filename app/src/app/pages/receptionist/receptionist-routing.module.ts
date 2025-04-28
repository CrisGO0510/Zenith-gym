import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeReceptionistComponent } from './components/home-receptionist/home-receptionist.component';

const routes: Routes = [{ path: '', component: HomeReceptionistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionistRoutingModule {}
