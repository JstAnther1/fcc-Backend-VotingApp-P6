import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { PollsmainComponent } from './pollsmain/pollsmain.component';
import { IndivpollComponent } from './indivpoll/indivpoll.component';
import { IndpollchartComponent } from './indivpoll/indpollchart/indpollchart.component'
import { LoginComponent } from './login/login.component';
import { Indpollchart2Component } from './indivpoll/indpollchart2/indpollchart2.component';
import { UsernewpollComponent } from './usernewpoll/usernewpoll.component';
import { UserdelpollComponent } from './userdelpoll/userdelpoll.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/allcurrentpolls', pathMatch: 'full' },
    { path: 'allcurrentpolls', component: PollsmainComponent },
    { path: 'indivpoll', component: IndivpollComponent, children: [
        { path: ':id', component: IndpollchartComponent },
        { path: ':id/result', component: Indpollchart2Component }
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'createnewpoll', canActivate: [AuthGuard], component: UsernewpollComponent },
    { path: 'delpoll', canActivate: [AuthGuard], component: UserdelpollComponent },
    { path: '**', redirectTo: '/allcurrentpolls' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}