import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent  implements OnInit {
  selectedTab='about';
  constructor(
    private movieService: MoviesService,
    private location: Location
  ) { }

  ngOnInit() {
    console.log('movies Service',this.movieService.selectedMovie);
    
  }

  setSelectedTab(tab: string){
    this.selectedTab= tab;
  }
  backToHome(){
    this.location.back();
  }


}
