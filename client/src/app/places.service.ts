import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place';
import { environment } from '../environments/environment';

@Injectable()
export class PlacesService {
  constructor(private http: HttpClient) { }

  placesUrl = environment.baseApiUrl + 'api/places/';

  getPlaces() {
    return this.http.get<Place[]>(this.placesUrl);
  }
}