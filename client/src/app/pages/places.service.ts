import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place';

@Injectable()
export class PlacesService {
  constructor(private http: HttpClient) { }

  placesUrl = 'http://127.0.0.1:8000/api/places/';

  getPlaces() {
    return this.http.get<Place[]>(this.placesUrl);
  }
}