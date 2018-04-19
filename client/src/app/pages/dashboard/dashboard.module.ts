import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { MapsModule } from '../../commons/map/map.module';
import { PlacesComponent } from '../places/places.component'; 

@NgModule({
  imports: [
    ThemeModule,
    MapsModule,
  ],
  declarations: [
    DashboardComponent,
    PlacesComponent
  ],
})
export class DashboardModule { }
