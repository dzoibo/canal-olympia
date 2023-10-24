import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TestData } from '../data';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  slideMovies: { id: number; url: string; name: string; language: string; category: string; type: string; resolution: string; }[] =[];
  scheduledMovies: { id: number; name: string; time: string; type: string; url: string; }[]=[];
  locations: { id: number; name: string; }[]=[];
  locationsSearchResult: { id: number; name: string; }[]=[];
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

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.slideMovies= TestData.slideMovies;
    this.scheduledMovies= TestData.scheduledMovies;
    this.locations=TestData.locations;
    this.locationsSearchResult=[...this.locations];
    this.loginCodeForm=this.formBuilder.group({
      number1:['',Validators.required],
      number2:['',Validators.required],
      number3:['',Validators.required],
      number4:['',Validators.required],
    });

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

  login(){

  }  

  showMoviePreview(id: number){
  }

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

 searchLocation(event: any){
  const searchKey = event.target!.value;
  this.locationsSearchResult= this.locations.filter(location=>location.name.toLowerCase().includes(searchKey.toLowerCase()));
 }
}
