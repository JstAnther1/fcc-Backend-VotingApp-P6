import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ServerService } from './server.service';

@Injectable()
export class AuthGuard implements CanActivate{
    logStatus:boolean;

    constructor(private serverService: ServerService,
                private router: Router
    ) {}
    
    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean>|Promise<boolean>|boolean{
            return this.serverService.checkingIfLogin().map(loggedIn => {
                if(loggedIn){
                    return true;
                }
            }).catch(() => {
                this.router.navigate(['allcurrentpolls']);
                return Observable.of(false);
            });
            /*if(this.serverService.checkingIfLogin()){
            return true;
        } else {
            this.router.navigate(['allcurrentpolls']);
            return false;
        }*/
    }
    
}


/* 
https://stackoverflow.com/questions/38203647/no-provider-for-authguard-using-canactivate-in-angular-2
https://stackoverflow.com/questions/40802734/angular2-canactivate   
https://stackoverflow.com/questions/43909883/angular-2-canactivate-observable-get-value-after-subscribe
https://stackoverflow.com/questions/43505024/return-boolean-instead-of-subscribe-to-canactivate
https://stackoverflow.com/questions/43909883/angular-2-canactivate-observable-get-value-after-subscribe
https://stackoverflow.com/questions/39772181/angular2-return-boolean-with-subscribe-to-canactivate  (this answer is for when api return 'true' or 'false' not 'json' or 'error')
https://stackoverflow.com/questions/38425461/angular2-canactivate-calling-async-function (this answer is for when api return 'true' or 'false' not 'json' or 'error')
https://stackoverflow.com/questions/37948068/angular-2-routing-canactivate-work-with-observable (the desired solution to 
the problem, where its a http.get that returns a json or error. And if on error needs a 'catch' to navigate away)
*/






