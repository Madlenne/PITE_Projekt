import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { UserModule } from './user/user.module';
import { MapsModule } from '../commons/map/map.module';

import { TouristComponent } from './tourist/tourist.component';
import { GuideComponent } from './guide/guide.component';
import { PlacesComponent } from './places/places.component'; 

const PAGES_COMPONENTS = [
  PagesComponent,
  TouristComponent,
  GuideComponent,
  PlacesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    UserModule,
    MapsModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
