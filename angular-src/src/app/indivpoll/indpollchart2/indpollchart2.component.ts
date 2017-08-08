import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-indpollchart2',
  templateUrl: './indpollchart2.component.html',
  styleUrls: ['./indpollchart2.component.css']
})
export class Indpollchart2Component implements OnInit {
  id:number;
  polldata: object;
  countedOptions: object;
  votecount= [];
  totalvotes=0;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.serverService.getPollsData().subscribe(
      (response: any[]) => {this.polldata = response[this.id]; console.log(this.polldata); this.displayStats();},
      (error) => console.log(error)
    );
    
    
  }

  displayStats(){
    const votes = this.polldata['votecount'];
    const polloptions = this.polldata['options'];
    
    var startingCount = polloptions.reduce(function(objectcountzero,option){
	    objectcountzero[option]=0;
	    return objectcountzero;
    }, {});
    /* returns for example {option1:0, option2:0, option3:0} */

    this.countedOptions = votes.reduce(function (startingFieldsZero, vote) { 
      if (vote in startingFieldsZero) {
        startingFieldsZero[vote]++;
      }
      return startingFieldsZero;
    }, startingCount);
    /* returns for example {option1:1, option2:3, option3:2} */
    
    for(var x in this.countedOptions){
      this.votecount.push(this.countedOptions[x]);
    }
    /* returns for example [1,3,2], basically converting object values to array form */

    for(var i=0;i<this.votecount.length;i+=1){
      this.totalvotes+=this.votecount[i];
    }
    /* returns total number of votes to calculate percentage */
    
    for(var j=0;j<this.votecount.length;j+=1){
      this.votecount[j]/=this.totalvotes;
      this.votecount[j]*=100;
      this.votecount[j]=this.votecount[j].toFixed(2)+"%";
    }
    /* turn votecount which is an array of option votes into percentages */
  }

}
