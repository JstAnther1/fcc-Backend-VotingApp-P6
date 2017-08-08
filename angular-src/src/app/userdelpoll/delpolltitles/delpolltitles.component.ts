import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-delpolltitles',
  templateUrl: './delpolltitles.component.html',
  styleUrls: ['./delpolltitles.component.css']
})
export class DelpolltitlesComponent implements OnInit {
  @Input() polldat: object;
  @Input() index: number;

  constructor(private serverService: ServerService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  delFrmDB(){
    this.serverService.userDelPoll(this.polldat).subscribe(
      (response) => {console.log(response); this.router.navigate(['allcurrentpolls']);}, 
      (error) => console.log(error)
    );
    
  }

}
