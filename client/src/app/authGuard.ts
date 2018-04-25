import { OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { GlobalState } from './global.state';
import { LoggedUser } from './commons/loggedUser';

export class GuideAuthGuard implements CanActivate, OnInit {

    user: LoggedUser;
    // constructor(private global: GlobalState) {}

    ngOnInit():void {
        // this.global.subscribe("loggedUser", user => {
        //     this.user = user;
        // })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.user && this.user.is_guide == true;
    }
}


export class TouristAuthGuard implements CanActivate, OnInit {
    
    user: LoggedUser;
    //constructor(private global: GlobalState) {}

    ngOnInit():void {
        // this.global.subscribe("loggedUser", user => {
        //     this.user = user;
        // })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return !(this.user === null || this.user === undefined);
    }
}