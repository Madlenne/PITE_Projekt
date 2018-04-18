import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { PlacesComponent } from '../places/places.component';

@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    DashboardComponent,
    PlacesComponent
  ],
})
export class DashboardModule { }
