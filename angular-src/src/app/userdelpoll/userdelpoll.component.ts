import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-userdelpoll',
  templateUrl: './userdelpoll.component.html',
  styleUrls: ['./userdelpoll.component.css']
})
export class UserdelpollComponent implements OnInit {
  polldata = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.loadPollsData();
    
  }

  loadPollsData(){
      this.serverService.getPollsData()
      .subscribe(
        (response: any[]) => {this.polldata = response;console.log(this.polldata);},
        (error) => console.log(error)
      );
    }
}
