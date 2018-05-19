import { 
    Injectable,
    OnInit,
} from '@angular/core';
import { LoggedUser } from '../commons/loggedUser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GlobalState } from './global.state';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    private loggedUser:BehaviorSubject<LoggedUser> = new BehaviorSubject<LoggedUser>(undefined);
    constructor() { }

    isLogged():boolean {
        return !!this.loggedUser.getValue();
    }

    getLoggedUser():LoggedUser {
        return this.loggedUser.getValue();
    }

    subscribeLoggedUser():Observable<LoggedUser> {
        return this.loggedUser.asObservable();
    }

    setLoggedUser(user:LoggedUser):void {
        //todo check from db if user is guide
        this.loggedUser.next(user);
    }

    isGuideNow(): boolean {
        const logged:LoggedUser = this.getLoggedUser();
        return logged && logged.is_guide;
    }

    logout():void {
        this.loggedUser.next(undefined);
    }
}
