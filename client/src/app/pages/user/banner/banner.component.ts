import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-banner',
    templateUrl: './banner.component.html',
})
export class UserBannerComponent {
    @Input('name') name:string = "kug";
    @Input('image') image:string; 
    constructor(
    ) {}
}
