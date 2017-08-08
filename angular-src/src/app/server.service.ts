import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ServerService {
    logoutSelected = new EventEmitter<void>();
    userData: any;
    userdata = [];
    
    

    checkingIfLogin(){
    return this.http.get('/profile')
        .map((response: Response) => this.userData = response.json());
    }

    constructor(private http: Http){}

    

    getPollsData(){
    return this.http.get('http://localhost:3000/allcurrentpolls')
        .map(
            (response: Response) => {
                return response.json();
            }
        );    
    
    }

    postPollVote(form: object){
    return this.http.post('http://localhost:3000/saveoption',form);
    }

    getUserData(){
    return this.http.get('/profile')
        .map(
            (response: Response) => {
                return response.json();
            }
        );
    }

    getLogout(){
    return this.http.get('/logout')
        .map(
            (response: Response) => {
                return response.json();
            }
        )    
    }

    postNewPoll(form: object){
    return this.http.post('http://localhost:3000/saveoption',form);
    }

    userDelPoll(form: object){
        return this.http.post('http://localhost:3000/delpoll',form);
    }

}