import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  public isMobile: boolean;

  constructor() {
    this.isMobile = UtilsService.isMobileDevice();
  }
}
