import { Component } from '@angular/core';
import { GlobalState } from '../../global.state';
import { LoggedUser } from '../../commons/loggedUser';

@Component({
  selector: 'user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent {
  loggedUser: LoggedUser;

  constructor(
    private globalState: GlobalState
  ) {
    globalState.subscribe("loggedUser",(user) => {
        this.loggedUser = new LoggedUser(user.id,user.token,user.username,user.mail,user.imageUrl);
        console.dir(this.loggedUser);
    });
  }

  onChange(checked: Boolean){
    console.dir(checked);
  }
  

}
