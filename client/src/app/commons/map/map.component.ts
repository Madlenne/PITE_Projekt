import { Component, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'mapbf',
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html'
})
export class MapComponent {
  @ViewChild(AgmMap)
  public agmMap: AgmMap
  
  lat = 50.0645311;
  lng = 19.9371252;


  objects:Array<MapObject> = [
    {
      latitude:50.0654718,
      longitude:19.9416613,
      photoRef:"CmRaAAAA5BVnVf3jbhlpkmnjhzDF_lSr9y0fuMFqjDUe6j8a4AvyoCwPf1jKUp6wyeisieoQuPvArPQ7_GXXkX3j9a4HWowGHcDR-V5SvQ_R5iVj7h5RMwbpBzlw9_rC0FYdw6S0EhC9kT0XSOERfzAF9ONCtvhrGhRLaEz1k5gAK-ZLki8v9jkfjrt4hA",
      name:"Kraków Barbican",
      placeId:"ChIJjUf7MRBbFkcRg9Ls9752tqU",
      vicinty:"Basztowa, Kraków"
    },
    {
      latitude:50.0646406,
      longitude:19.9399668,
      photoRef:"CmRaAAAAEnf6pOTUJdMv0aC-5ukwXNY74FKVl-kPCEmnhX-eSodHY3ZKukK5170GUfwlrHnGj3IDhNoeqWeFe0hlDVxQBQ-iCO9fZS21234nqbqL_mRTsEGQYOnfuHB9_I6OAQstEhAJ_7GwApaE-C8hl0P5uKA9GhSFhDgeTNVC837G9LLT26SzyJWbrg",
      name:"Muzeum XX. Czartoryskich w Krakowie",
      placeId:"ChIJv-Yt2g9bFkcR6Iut31RVCzY",
      vicinty:"św. Jana 19, Kraków"
    },
    {
      latitude:50.06169310000001,
      longitude:19.937374,
      photoRef:"CmRaAAAAToA9Hy45iyRRQwfBPZk3KAkOHti91YjZK_vmqqZiN3NPMh-8giTtGvk42hAPKwTONIjY626bC4GcoooXNVkgICM0K0A0GlBl055n8vA0ZP4t9Nv7wh9nzp095bf9HqbxEhB4PcuDHAJ2mhHK3OxHSKsnGhQ6Mo_B1R1fEMp631dxCKhQ9W9s_g",
      name:"Muzeum Narodowe w Krakowie Galeria Sztuki Polskiej XIX wieku w Sukiennicach",
      placeId:"ChIJ3Q97Bw5bFkcRjr9Px9GS8L8",
      vicinty:"Rynek Główny 3, Kraków"
    },
    {
      latitude:50.0615639,
      longitude:19.9339309,
      photoRef:"CmRaAAAAOaklwmgIfm26K9Zq44m7jUT2bxAqMtO-gMvMRWMOL3NQcI6YDDOKvnusK9THIApSbSWXU4sd7VXPU4dY0vVd2WpcRShhPmDNshA5H9tGuRWLZDM1US3emfQz3fOay41dEhB7PzfjNLUkoETLegQZztklGhTjNgjne5ZO5U9GqupDKxQ-bTFgKg",
      name:"Muzeum Uniwersytetu Jagiellońskiego Collegium Maius",
      placeId:"ChIJx5KoMgxbFkcR87g-4UkYInQ",
      vicinty:"Jagiellońska 15, Kraków"
    },
    {
      latitude:50.06598349999999,
      longitude:19.9277655,
      photoRef:"CmRaAAAAYoyKRS2WQ8LQ2tXgtC41iu4KBARDZ9_yZBVIR-3JrUXq8Auqs-3_aye8ZF6hA79JUWoW1C1873DP7gNI-FTI7wKPXhIUcfk4ZD4ATdKzijGEBPXWd8qaBLue1df9hAe4EhBSQV9FHS6VKQGyXkpnKgt1GhQ0uvG-gEBFdQ8OBbbBlUjstmQEeA",
      name:"Auschwitz Tours",
      placeId:"ChIJC2JZswlbFkcR-uJCnWrawyc",
      vicinty:"Piotra Michałowskiego 11, Kraków"
    }
  ]
}


class MapObject{
  latitude:number;
  longitude:number;
  photoRef:string;
  name:string;
  placeId:string;
  vicinty:string;
}