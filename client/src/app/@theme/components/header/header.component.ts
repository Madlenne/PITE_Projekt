import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LoggedUser } from '../../../commons/loggedUser';
import { GlobalState } from '../../../global.state';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';
  user: LoggedUser;
  subscription:any;
  userMenu = [{ title: 'Profile' }, { title: 'Log out', link: 'logout' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private socialAuthService: AuthService,
              private globalState: GlobalState,
              private router: Router) {
  }

  ngOnInit() {
    this.globalState.subscribe('loggedUser', (user) => {
      this.user = user;
    });
    
    this.subscription = this.menuService.onItemClick().subscribe(e => {
      if(e.item && e.item.title === 'Log out'){
        this.socialAuthService.signOut().then(result => {
          this.globalState.notifyDataChanged("loggedUser", undefined);
        });
      }
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  public socialSignIn() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log("sign in data : " , userData);

        const loggedUser = new LoggedUser(
          userData.id,
          userData.idToken,
          userData.name,
          userData.email,
          userData.image
        );

        this.globalState.notifyDataChanged("loggedUser",loggedUser);
      }
    );
  }

  logout() {
    this.socialAuthService.signOut().then(
      data => {
          this.globalState.notifyDataChanged("loggedUser", undefined);
      }
    ).catch(e => console.log(e))
  }

  viewProfile():void {
    this.router.navigate(['/pages/profile']);
  }
}
