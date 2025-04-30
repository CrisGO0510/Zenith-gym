import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HistoryClientComponent } from './components/history-client/history-client.component';

const routes: Routes = [
  { path: '', component: HomeClientComponent },
  { path: 'history', component: HistoryClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
