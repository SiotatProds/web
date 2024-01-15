import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {

    public images: string[] = [
        'assets/img/horizontal/workingImage1.jpg',
        'assets/img/horizontal/workingImage2.jpg',
        'assets/img/horizontal/workingImage3.jpg',
        'assets/img/horizontal/workingImage4.jpg',
        'assets/img/horizontal/workingImage5.jpg',
    ];

}
