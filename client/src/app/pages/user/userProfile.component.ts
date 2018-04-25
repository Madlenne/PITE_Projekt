import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../global.state';
import { LoggedUser } from '../../commons/loggedUser';
import { UserService } from "../../user.service";
import { User } from "../../user";

@Component({
  selector: 'user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent implements OnInit{
  loggedUser: LoggedUser;

  userIsGuide: Boolean;

  constructor(
    private globalState: GlobalState,
    private userService: UserService
  ) {}

  ngOnInit():void {
    this.loggedUser = this.userService.logged;
    console.log(this.loggedUser);
    if(this.loggedUser)
      this.userIsGuide = this.loggedUser.is_guide;
    // this.globalState.subscribe("loggedUser",(user) => {
    //   console.log(user);
    //     if(!user){
    //       return;
    //     }
    //     this.loggedUser = user.id;
    //     console.dir(this.loggedUser);
    //     this.userIsGuide = user.is_guide;
        
    // });
  }
  
  submitUserSettings(){//TODO auth , redirect user when he's not loggedin
    if(!this.loggedUser){
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
