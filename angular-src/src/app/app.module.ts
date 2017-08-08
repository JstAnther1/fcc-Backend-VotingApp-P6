import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { PollsmainComponent } from './pollsmain/pollsmain.component';
import { ServerService } from './server.service';
import { HeaderComponent } from './header/header.component';
import { IndivpollComponent } from './indivpoll/indivpoll.component';
import { IndpollchartComponent } from './indivpoll/indpollchart/indpollchart.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PolltitlesComponent } from './pollsmain/polltitles/polltitles.component';
import { Indpollchart2Component } from './indivpoll/indpollchart2/indpollchart2.component';
import { ProfileComponent } from './profile/profile.component';
import { UsernewpollComponent } from './usernewpoll/usernewpoll.component';
import { UserdelpollComponent } from './userdelpoll/userdelpoll.component';
import { DelpolltitlesComponent } from './userdelpoll/delpolltitles/delpolltitles.component';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    PollsmainComponent,
    HeaderComponent,
    IndivpollComponent,
    IndpollchartComponent,
    LoginComponent,
    PolltitlesComponent,
    Indpollchart2Component,
    ProfileComponent,
    UsernewpollComponent,
    UserdelpollComponent,
    DelpolltitlesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ServerService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
