import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Location } from '@angular/common';
import { TestData } from '../data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent  implements OnInit {
  selectedTab='about';
  moviePlanning: { day: string; sessions: { id: number; time: string; language: string; locationId: number; price: { pre_first: number; prev: number; stand: number; child: number; }; }[]; }[]=[];
  bottomModal='';
  isSwitchCinema=false; 
  constructor(
    private movieService: MoviesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.moviePlanning=TestData.planningList;
    
  }

  setSelectedTab(tab: string){
    this.selectedTab= tab;
  }
  backToHome(){
    this.location.back();
  }

  getLocation(locationId: number){
    const index=TestData.locations.findIndex(location=>location.id===locationId);
    return TestData.locations[index].name;

  }

  selectPlace(sessionId: number){
    
  }

}
