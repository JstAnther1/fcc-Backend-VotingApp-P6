import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router'; 

import { ServerService } from '../server.service';

@Component({
  selector: 'app-usernewpoll',
  templateUrl: './usernewpoll.component.html',
  styleUrls: ['./usernewpoll.component.css']
})
export class UsernewpollComponent implements OnInit {
  polloptionsForm: FormGroup;
  newPollData = {
    title: String,
    options: [],
    votecount: []
  }

  constructor(private router: Router,
              private serverService: ServerService            
  ) { }

  ngOnInit() {
    this.polloptionsForm = new FormGroup({
      'pollData': new FormGroup({
        'pollTitle': new FormControl(null, Validators.required)
        
      }),
      'option1': new FormControl(null, Validators.required),
      'option2': new FormControl(null, Validators.required),
      'addioptions': new FormArray([])
    });
  }

  onSubmit(){
    
    console.log(this.polloptionsForm);
    this.newPollData.title = this.polloptionsForm.value.pollData.pollTitle;
    this.newPollData.options.push(this.polloptionsForm.value.option1,this.polloptionsForm.value.option2);
    for(var i=0;i<this.polloptionsForm.value.addioptions.length;i+=1){
      this.newPollData.options.push(this.polloptionsForm.value.addioptions[i]);
    }
    console.log(this.newPollData);
    this.serverService.postNewPoll(this.newPollData).subscribe(
      (response) => {console.log(response); this.router.navigate(['allcurrentpolls']);},
      (error) => console.log(error)
    )
    
  }
  /*of note!: (response) => {console.log(response); this.router.navigate(['allcurrentpolls']);},
  router.navigate is to be INSIDE response to produce updated view in main menu which is(localhost:3000/allcurrentpolls) */

  onAddOption() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.polloptionsForm.get('addioptions')).push(control);
  }

  onDeleteAddiOption(index:number){
    (<FormArray>this.polloptionsForm.get('addioptions')).removeAt(index);
  }

}
