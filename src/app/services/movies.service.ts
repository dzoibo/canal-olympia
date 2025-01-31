import { Injectable } from '@angular/core';
import { API_URL, ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  selectedMovie: any;
  sessionId: any;
  categories={
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
  }

  constructor(private apiService: ApiService){}

  displayMovieDetails(selectedMovie: any){
    this.selectedMovie=selectedMovie;
  }
  
  selectSession(sessionId: number) {
    this.sessionId= sessionId;
  }


  async getTrendingMovies(){
    try {
      const response= this.apiService.getRequest(API_URL.trending);
      console.log(response)
    } catch (error) {
      console.log('erreur: ', error)
    }
  }

  async getPreferences(){

  }



}
