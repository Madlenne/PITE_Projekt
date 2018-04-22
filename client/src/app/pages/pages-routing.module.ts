import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user/userProfile.component';
import { GuideComponent } from "./guide/guide.component";
import { TouristComponent } from "./tourist/tourist.component";
import { TouristAuthGuard, GuideAuthGuard} from '../authGuard';
import { GlobalState } from '../global.state';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path:'profile',
      component: UserProfileComponent,
      //canActivate: [TouristAuthGuard]
    },
    {
      path:'tourist',
      component: TouristComponent,
      //canActivate: [TouristAuthGuard]
    },
    {
      path:'guide',
      component: GuideComponent,
      //canActivate: [GuideAuthGuard]
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    TouristAuthGuard,
    GuideAuthGuard,
    GlobalState
  ]
})
export class PagesRoutingModule {
}
