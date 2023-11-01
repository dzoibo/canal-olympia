import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieReservationComponent } from './movie-reservation/movie-reservation.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'movie-details',
    component: MovieDetailsComponent
  },
  {
    path: 'movie-reservation',
    component: MovieReservationComponent
  },
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
