import { Component } from '@angular/core';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bottomModal='';
  constructor() {}

  displayLogin(){
    this.bottomModal='login';
  }

  displaySearch(){
    this.bottomModal='search';
  }

  displayLanguageSelector(){
    this.bottomModal='language';
  }

}
