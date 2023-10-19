import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.sass']
})
export class LabComponent {

  public youtubeUrls: string[];
  public isMobile: boolean;

  constructor() {
    this.isMobile = UtilsService.isMobileDevice();
    this.youtubeUrls = [
      'H0ZqB-3Y4MI',
      'K7hyBsxBPWM',
      'QLWrJUVz5ZM',
      'ej_SyLOqF9E',
      '-T0riE5DpDA'
    ];
  }
  public openLink(link: string): void {
    window.open(link);
  }
}
