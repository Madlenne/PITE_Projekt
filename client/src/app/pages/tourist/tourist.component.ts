import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.scss']
})
export class TouristComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNext(){
    alert('TODO: next');
  }
}
