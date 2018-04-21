import { Component, ViewChild, OnInit } from '@angular/core';
import { AgmMap } from '@agm/core';
import { PlacesService } from '../../places.service'; 
import { Place } from  '../../place';

@Component({
  selector: 'mapbf',
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  places: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.showPlaces();
  }

  showPlaces() {
    this.placesService.getPlaces()
      .subscribe(
        data => { 
        console.dir(data);
        this.places = data;
      },
      error => alert('Error when loading data: ' + JSON.stringify(error))
    );
  }
  
  @ViewChild(AgmMap)
  public agmMap: AgmMap
  
  lat = 50.0645311;
  lng = 19.9371252;

}


class MapObject{
  latitude:number;
  longitude:number;
  photoRef:string;
  name:string;
  placeId:string;
  vicinty:string;
}