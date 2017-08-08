import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-polltitles',
  templateUrl: './polltitles.component.html',
  styleUrls: ['./polltitles.component.css']
})
export class PolltitlesComponent implements OnInit {
  @Input() polldat: object;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
