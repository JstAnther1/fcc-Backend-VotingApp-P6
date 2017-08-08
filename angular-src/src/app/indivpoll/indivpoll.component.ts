import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-indivpoll',
  templateUrl: './indivpoll.component.html',
  styleUrls: ['./indivpoll.component.css']
})
export class IndivpollComponent implements OnInit {
  
  id: number;

  constructor() { }

  ngOnInit() { }

}



