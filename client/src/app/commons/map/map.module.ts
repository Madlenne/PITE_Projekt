import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPmUdjqfn-8rTlGhGas9_fxfHj1yUKcUk'
    }),
  ],
  exports: [
    MapComponent
  ],
  declarations: [
    MapComponent
  ],
})
export class MapsModule { }