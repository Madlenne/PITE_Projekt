import { Component, OnInit } from '@angular/core';
import { Place } from '../../../place';
@Component({
  selector: 'add-trip',
  templateUrl: './addTrip.component.html',
  styleUrls: ['./addTrip.component.scss']
})
export class AddTripComponent implements OnInit {

    selectedPlaces:Place[] = [];
    ids:String[] = []
    constructor() { }
    tripName = ""
    tripDescription = ""
    ngOnInit() {
    }

    addPlace(place:Place):void {
        if(this.selectedPlaces.indexOf(place, 0) == -1)
            this.selectedPlaces.push(place);
        this.updateIds();
    }

  remove(place):void {
    var index = this.selectedPlaces.indexOf(place, 0);
    if (index > -1) {
       this.selectedPlaces.splice(index, 1);
    }
    this.updateIds();
  }

  updateIds():void {
      this.ids = this.selectedPlaces.map(p => p.placeId);
  }
  registerTrip():void {
      console.log(this.selectedPlaces);
  }
}
