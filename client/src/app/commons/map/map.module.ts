import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3e6VDebi6KVuUlh_fnRBcnRyGCdcf9X8',
      libraries: ['places'],
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