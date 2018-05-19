import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { AuthService } from '../shared/auth.service'; 
import { MENU_ITEMS } from './pages-menu';
import { Subscription } from 'rxjs/Subscription';
import { LoggedUser } from '../commons/loggedUser';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor( private auth: AuthService){}
  menu = MENU_ITEMS;
  private subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.auth.subscribeLoggedUser().subscribe(
      newLogged => {
        console.log('update' + newLogged);
        this.updateMenuVisibility(newLogged);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateMenuVisibility(user:LoggedUser): void {
    const isLogged = !!user;
    console.log("isLogged" + isLogged);
    const roles = isLogged ? user.roles : [];
    for(const item of this.menu) {
      this.updateItem(item, isLogged, roles);
    }
  }

  private hasRole(roles: Array<string>, roleName: string): boolean {
    return !!roles.find(e => e === roleName);
  } 

  private updateItem( item: NbMenuItem, isLogged: boolean, roles: Array<string>):void {
    if(this.hasRole(roles, 'admin')){
      item.hidden = false;
      if(item.children){
        item.children.forEach(e => this.updateItem(e, isLogged, roles));
      }
    } else if(item.data && item.data.permission){
      const role = roles.find(r => {
        return item.data.permission.findIndex(a => a === r) != -1;
      });
      if(role){
        item.hidden = false;
      } else {
        item.hidden = true;
      }
    } else {
      item.hidden = false;
    }
  }
}
