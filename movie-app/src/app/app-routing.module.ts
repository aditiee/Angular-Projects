import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutusComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'add',
    component: AddMovieComponent,
  },
  {
    path: 'movies/:id',
    component: DetailComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
