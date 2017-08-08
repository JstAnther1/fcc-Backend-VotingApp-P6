import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usersocialdata=[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getUserData()
    .subscribe(
      (response: any[]) => {this.usersocialdata = response; console.log(this.usersocialdata)},
      (error) => console.log(error)
    );
  }

  toLogout(){
    this.serverService.logoutSelected.emit();
    this.serverService.getLogout().subscribe(
      (response) => {this.usersocialdata=[];console.log(response);},
      (error) => console.log(error)    
    );

    
  }

}
