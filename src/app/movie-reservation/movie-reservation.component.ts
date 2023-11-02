import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TestData } from '../data';

@Component({
  selector: 'app-movie-reservation',
  templateUrl: './movie-reservation.component.html',
  styleUrls: ['./movie-reservation.component.scss'],
})
export class MovieReservationComponent  implements OnInit {
  isExpandedSeat=false;
  seats: { row: number; columns: { id: number; state: string; }[]; }[]=[];
  selectedSeats: {row: number, column: number}[]=[]

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.seats= TestData.seats;
  }

  back(){
    this.location.back();
  }

  expandSeat(value: boolean){
    this.isExpandedSeat=value;
  }

  reserveSeat(rowIndex: number, columnIndex: number){ 
    const seat ={
      row: this.seats[rowIndex].row,
      column: this.seats[rowIndex].columns[columnIndex].id
    }
    const index= this.selectedSeats.findIndex(item=>item.column===seat.column && item.row===seat.row);
    if(index>=0){
      this.selectedSeats.splice(index,1);
      this.seats[rowIndex].columns[columnIndex].state='free';
    }else{
      this.selectedSeats.push(seat);
      this.seats[rowIndex].columns[columnIndex].state='selected';
    }
  }

}
