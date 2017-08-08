import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-pollsmain',
  templateUrl: './pollsmain.component.html',
  styleUrls: ['./pollsmain.component.css']
})
export class PollsmainComponent implements OnInit {
  polldata=[];
  usersocialdata=[];
  logStatus: boolean;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.loadPollsData();

    this.serverService.getUserData()
    .subscribe(
      (response: any[]) => this.usersocialdata = response,
      (error) => console.log(error)
    );
      
    this.serverService.logoutSelected.subscribe(
      (response) => {this.usersocialdata = []; console.log(this.usersocialdata);},
      (error) => console.log(error)
    );

    this.serverService.checkingIfLogin().subscribe(
      (response) => {this.logStatus=true;console.log(this.logStatus),console.log(response);},
      (error) => {this.logStatus=false;console.log(this.logStatus)}
    )
    
  }

  loadPollsData(){
      this.serverService.getPollsData()
      .subscribe(
        (response: any[]) => {this.polldata = response;console.log(this.polldata);},
        (error) => console.log(error)
      );
    }
  
}
