import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { UserProfileComponent } from './userProfile.component';
import { UserBannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    UserProfileComponent,
    UserBannerComponent,
  ],
})
export class UserModule { }
