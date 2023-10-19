import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {

    public images: string[] = [
        'assets/img/horizontal/workingImage1.png',
        'assets/img/horizontal/workingImage2.png',
        'assets/img/horizontal/workingImage3.png',
        'assets/img/horizontal/workingImage4.png',
        'assets/img/horizontal/workingImage5.png',
    ];

}
