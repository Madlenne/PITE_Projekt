import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent{

  constructor(
    private authService: AuthService
  ) {}
  
  submitUserSettings(){//TODO auth , redirect user when he's not loggedin
    
  }
  
}
