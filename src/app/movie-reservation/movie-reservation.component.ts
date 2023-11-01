import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-reservation',
  templateUrl: './movie-reservation.component.html',
  styleUrls: ['./movie-reservation.component.scss'],
})
export class MovieReservationComponent  implements OnInit {
  rows: number[] = Array.from({ length: 11 }, (_, i) => i + 1);
  columns: number[] = Array.from({ length: 30 }, (_, i) => i + 1);

  constructor(
    private location: Location
  ) { }

  ngOnInit() {}

  back(){
    this.location.back();
  }

}
