import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-audiovisual-works',
  templateUrl: './audiovisual-works.component.html',
  styleUrls: ['./audiovisual-works.component.sass']
})
export class AudiovisualWorksComponent {

  public youtubeUrls: string[]
  public isMobile: boolean;

  constructor() {
    this.isMobile = UtilsService.isMobileDevice();
    const urls = [
      'SBPiRH78IlA',
      'hRHNjIt_kTs',
      'yx2a55JtsRM',
      'U6XylxUckBI',
      'ENvXIBtyR5M',
      'MJlrrWR7Bz0',
      'U3WLNvW2BeI',
      '3tSgdkdCJpE',
      'qEjgpxoGGxs',
      'RPRnR7l-k_s',
      'ZsvxQeI6U5s',
      'yF_nCgsbTy4',
      'zZH7BBhLXxk',
      'en015ZAUZj0',
      'r8xqo3fIdqw',
      'UJpX-XlA7u0',
      'CII77o-HSNo',
      'L0US--V6i_U',
      'srvODmmblnE',
      '2FOEjoXI-oQ',
      'W4BlAFZ5wR8',
      'VNz1Z-4oQ6Q',
      'yMlzRdTRq_A'
    ];
    this.youtubeUrls = urls.sort(() => Math.random() - 0.5);
  }
}
