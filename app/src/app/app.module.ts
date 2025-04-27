import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MembershipsModule } from './pages/memberships/memberships.module';
import { LoginModule } from './login/login.module';
import { SingupModule } from './singup/singup.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    MembershipsModule,
    LoginModule,
    SingupModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
