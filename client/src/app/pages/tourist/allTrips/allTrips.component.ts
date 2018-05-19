import { Component, OnInit } from '@angular/core';
import { Place } from '../../../place';
import { Router } from '@angular/router';


@Component({
  selector: 'all-trips',
  templateUrl: './allTrips.component.html',
  styleUrls: ['./allTrips.component.scss']
})
export class AllTripsComponent implements OnInit {

    trips = [
        {
            tripId: "21",
            tripName: "nazwa mojej superowej  wycieczkie",
            tripDescription: "Opis jakiegos miejsca, ktory ktos sobie oddał",
            place: {
                name: "nazwa miejsca 1",
                photoref: "CmRaAAAAEnf6pOTUJdMv0aC-5ukwXNY74FKVl-kPCEmnhX-eSodHY3ZKukK5170GUfwlrHnGj3IDhNoeqWeFe0hlDVxQBQ-iCO9fZS21234nqbqL_mRTsEGQYOnfuHB9_I6OAQstEhAJ_7GwApaE-C8hl0P5uKA9GhSFhDgeTNVC837G9LLT26SzyJWbrg"
            }
        },
        {
            tripId: "12",
            tripName: "nazwa1",
            tripDescription: "opis1",
            place: {
                name: "nazwa miejsca 1",
                photoref: "CmRaAAAAEnf6pOTUJdMv0aC-5ukwXNY74FKVl-kPCEmnhX-eSodHY3ZKukK5170GUfwlrHnGj3IDhNoeqWeFe0hlDVxQBQ-iCO9fZS21234nqbqL_mRTsEGQYOnfuHB9_I6OAQstEhAJ_7GwApaE-C8hl0P5uKA9GhSFhDgeTNVC837G9LLT26SzyJWbrg"
            }
        }
    ]

    constructor(private router:Router){}

    ngOnInit() {
    }

    redirect(id:string): void {
        this.router.navigate([`tourist/tripDetails/${id}`]);
    }
}