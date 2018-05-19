import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../../../place';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trip-details',
  templateUrl: './tripDetails.component.html',
  styleUrls: ['./tripDetails.component.scss']
})
export class TripDetailsComponent implements OnInit, OnDestroy {

    details = {
      tripId: 12,
      tripName: "nazwa tripa",
      tripDescription: "opis ktory ktos dal",
      places:[
          {
              placeid: "id",
              latitude: 52,
              longitude: 21,
              name: "nazwa",
              photoRef: "CmRaAAAAEnf6pOTUJdMv0aC-5ukwXNY74FKVl-kPCEmnhX-eSodHY3ZKukK5170GUfwlrHnGj3IDhNoeqWeFe0hlDVxQBQ-iCO9fZS21234nqbqL_mRTsEGQYOnfuHB9_I6OAQstEhAJ_7GwApaE-C8hl0P5uKA9GhSFhDgeTNVC837G9LLT26SzyJWbrg"              ,
              vicinty: "dfghjo"
          }
        ],
      guides:[
          //lista opcjonalnych przewodnikow ktorzy chca wziac wycieczke :D
          {
            id:"id googlowe",
            username:"nazwa user",
            grade: 4.12,// jesl iwogole kiedys to zrobiimy XD
            selected: true
        },
        {
          id:"id googlowe",
          username:"nazwa user",
          grade: 4.12,// jesl iwogole kiedys to zrobiimy XD
          selected: false
        }
      ]
    }
    private sub;
    id:Number;
    constructor(private activate:ActivatedRoute){}

    ngOnInit() {
      this.sub = this.activate.params.subscribe(params => {
         this.id = +params['id'];
      });
    }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}
