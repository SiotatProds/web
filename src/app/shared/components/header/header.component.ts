import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  public routes = [
    {
      url: '/audiovisual-works',
      name: 'Proyectos'
    },
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/lab',
      name: 'Laboratorio'
    }
  ]

  constructor(public router: Router) {
    this.routes.map(route => route.name);
  }

  public navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
