import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-indpollchart',
  templateUrl: './indpollchart.component.html',
  styleUrls: ['./indpollchart.component.css']
})
export class IndpollchartComponent implements OnInit {
  id: number;
  polldata = {};
  newData = {
    title: String,
    options: [],
    votecount: []
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.serverService.getPollsData()
    .subscribe(
      (response: any[]) => this.polldata = response[this.id],
      (error) => console.log(error)
    );
    
  }
  
  onSubmit(form: NgForm){
    this.newData.title = this.polldata['title'];
    this.newData.options = this.polldata['options'];
    this.newData.votecount = this.polldata['votecount'];
    this.newData.votecount.push(form.form.value.option);
    this.serverService.postPollVote(this.newData).subscribe(
      (response) => {console.log(response); this.router.navigate(['result'], {relativeTo: this.route});},
      (error) => console.log(error)
    );
    
  }

}

/*https://stackoverflow.com/questions/41231557/refresh-component-in-angular-2?rq=1
https://stackoverflow.com/questions/42717102/refresh-component-after-doing-a-router-navigate */
