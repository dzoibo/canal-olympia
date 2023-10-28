import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    StatusBar.setBackgroundColor({color:"0c208080"}).catch(error=>{
      console.log('error:', error);    
    });
  }
}
