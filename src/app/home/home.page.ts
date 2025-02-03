import { Component, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TestData } from '../data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwiperOptions } from 'swiper/types';
import { IonInput } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { Movies, ScheduledMovies, Specifities } from '../models';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  @ViewChild('inputSearchMovie') inputSearchMovie!: IonInput; 
  types : string[]=[];

  slideMovies: Movies[]=[];
  scheduledMovies: ScheduledMovies[]=[];
  searchResultMovies: ScheduledMovies[]=[];

  locations: Specifities[]=[];
  locationsSearchResult: Specifities[]=[];
  bottomModal='';
  selectedLocation={
    id:1,
    name: 'Bessengue, Douala',
  };
  selectedLanguage='en';
  loginStep= 'number';
  loginCodeForm!: FormGroup;
  userNumber='';
  timeOut=60;
  isActiveSearchMovie=false;
  slideOptions: SwiperOptions = {
    spaceBetween:"30",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      slideShadows: false,
      rotate: 0,
      stretch: 0,
      depth: 200,
      scale: 0.93,
      modifier:1
    }, 
    pagination: {
      clickable: false,
      renderBullet:(index: number, className: string) => '<span> </span>'
    },
  };
  activeIndex=0;
  videoHasStarted= false;
  currentList='new';
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private movieService: MoviesService
  ){}

  ngOnInit(): void {
    this.slideMovies= TestData.slideMovies;
    this.scheduledMovies= TestData.scheduledMovies;
    this.locations=TestData.locations;
    this.locationsSearchResult=[...this.locations];
    this.searchResultMovies=[...this.scheduledMovies];
    this.loginCodeForm=this.formBuilder.group({
      number1:['',Validators.required],
      number2:['',Validators.required],
      number3:['',Validators.required],
      number4:['',Validators.required],
    });
    const swiperEl:any = document.querySelector('swiper-container');
    Object.assign(swiperEl, this.slideOptions);
    swiperEl?.initialize();
    // Extrait les types uniques du tableau scheduledMovies
    this.types = [...new Set(this.scheduledMovies.map(movie => movie.type))];
  }

  displayLogin(){
    this.bottomModal='login';
  }

  displaySearch(){
    this.bottomModal='search';
  }

  displayLanguageSelector(){
    this.bottomModal='language';
  }

  login(){}  

  

  setLanguage(language: string){
    this.selectedLanguage=language;
    this.bottomModal='';
  }

  selectLocation(location: any){
    this.selectedLocation=location;
    this.bottomModal='';
    this.locationsSearchResult=[...this.locations];
  }

  nextLoginStep(next: boolean){
    if(next){
      this.loginStep='confirmation code';
      this.resetTimeOut();
    }else{
      this.loginStep='number';
    }
  }

  resendConfirmationCode(){
    /**
     * code for confirmation code here 
     */
    this.resetTimeOut();
  }

  resetTimeOut(){
    this.timeOut=59;
    const timer=setInterval((()=>{
      this.timeOut--
      if(this.timeOut<1){
        clearInterval(timer);
      }
    }),1000)
  }

  setList(currentList: string){
    this.currentList= currentList;
  }

 searchLocation(event: any){
    const searchKey = event.target!.value;
    this.locationsSearchResult= this.locations.filter(location=>location.name.toLowerCase().includes(searchKey.toLowerCase()));
 }

 searchMovie(event: any){
    const searchKey = event.target!.value;
    this.searchResultMovies= this.scheduledMovies.filter(location=>location.name.toLowerCase().includes(searchKey.toLowerCase()));
 }

 onSlideChange(event: any){
   this.activeIndex=event.detail[0].activeIndex;
 }

 displayHideSearchMovie(value: boolean){
    this.isActiveSearchMovie=value;
    document.getElementById('global-container')?.scrollTo({ top: 300, behavior: 'smooth' });
    this.inputSearchMovie.setFocus();
 }

  backToTop(){
    document.getElementById('global-container')?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showMoviesDetail(movies: any){
    this.router.navigate(['movie-details']);
    this.movieService.displayMovieDetails(movies);
  }

  getMoviesByType(type: string) {
    return this.searchResultMovies.filter(movie => movie.type === type);
  }

  startVideo(movie:Movies) {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach((video: HTMLVideoElement) => {
      if (!video.paused) {
        video.pause();
      }
    });
    const video = document.getElementById('movie'+movie.id) as HTMLVideoElement;
    if (video.paused) {
      video.play();
    }else{
      video.pause();
    }
  }
}
