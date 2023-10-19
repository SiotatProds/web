import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AudiovisualWorksComponent } from './modules/audiovisual-works/audiovisual-works.component';
import { HomeComponent } from './modules/home/home.component';
import { LabComponent } from './modules/lab/lab.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },
  {
    path: 'audiovisual-works',
    component: AudiovisualWorksComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
