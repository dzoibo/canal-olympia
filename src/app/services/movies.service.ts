import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  selectedMovie: any;
  sessionId: any;

  displayMovieDetails(selectedMovie: any){
    this.selectedMovie=selectedMovie;
  }

  selectSession(sessionId: number) {
    this.sessionId= sessionId;
  }
}
