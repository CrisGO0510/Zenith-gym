import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'memberships',
    loadChildren: () =>
      import('./pages/memberships/memberships.module').then(
        (m) => m.MembershipsModule,
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'singup',
    loadChildren: () =>
      import('./pages/singup/singup.module').then((m) => m.SingupModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./pages/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'receptionist',
    loadChildren: () =>
      import('./pages/receptionist/receptionist.module').then(
        (m) => m.ReceptionistModule,
      ),
  },
  {
    path: 'administrative',
    loadChildren: () =>
      import('./pages/administrative/administrative.module').then(
        (m) => m.AdministrativeModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
