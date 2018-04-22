import { Component } from '@angular/core';
import { GlobalState } from '../../global.state';
import { LoggedUser } from '../../commons/loggedUser';
import { UserService } from "../../user.service";
import { User } from "../../user";

@Component({
  selector: 'user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent {
  loggedUser: LoggedUser;

  userIsGuide: Boolean;

  constructor(
    private globalState: GlobalState,
    private userService: UserService
  ) {
    globalState.subscribe("loggedUser",(user) => {
        this.loggedUser = new LoggedUser(user.id,user.token,user.username,user.mail,user.imageUrl);
        console.dir(this.loggedUser);
        this.userService.getUser(+this.loggedUser.id).subscribe(user => {
            this.userIsGuide = user.is_guide;
            //TODO maybe save settings in global state
        });
    });
  }
  
  submitUserSettings(){//TODO auth , redirect user when he's not loggedin
    if(this.loggedUser === null){
      alert("Please log in");
      return;
    }
    console.log(this.userIsGuide);
    var user = <User> {
      user_id: +this.loggedUser.id,
      is_guide: this.userIsGuide
    };
    this.userService.putUser(user).subscribe(
      data => {
        console.log(data);
        alert("Saved");
      },
      error => {
        alert("Error when saving settings: " + JSON.stringify(error))
      }
    );
  }

}
