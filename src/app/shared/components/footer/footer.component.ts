import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  public sendMail(): void {
    window.location.href = 'mailto:siotatinfointerna@gmail.com';
  }

  public openLink(link: string): void {
    window.open(link);
  }
}
