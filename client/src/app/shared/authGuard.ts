import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { AuthService } from './auth.service';

export class GuideAuthGuard implements CanActivate {

    constructor(private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        return this.auth.isGuideNow();
    }
}

export class TouristAuthGuard implements CanActivate{

    constructor(private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        return this.auth.isLogged();
    }
}

export class UniqueAuthGuard implements CanActivate {
    
    constructor(private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        const isLogged = !!this.auth.getLoggedUser();
        const roles = isLogged ? this.auth.getLoggedUser().roles : [];
        //todo find from menu in pagesComponent current view by url path,
        //and depends on permission grand access
        return true;
    }

}