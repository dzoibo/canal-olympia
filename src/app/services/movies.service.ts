import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  selectedMovie: any;

  constructor() { }
  displayMovieDetails(selectedMovie: any){
    this.selectedMovie=selectedMovie;
  }
}
