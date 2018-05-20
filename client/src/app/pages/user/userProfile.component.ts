import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent implements OnInit{

  user = {
    id: "id",
    username: "nazwa usera",
    mail: "mail",
    grade: 4.54
  }

  constructor(
    private authService: AuthService
  ) {}
  
  public ngOnInit():void {

  }
  
  submitUserSettings(){
    
  }
  
  private isLogged():boolean {
    return this.user.id == this.authService.getLoggedUser().id;
  }
}
