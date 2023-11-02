import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TestData } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-reservation',
  templateUrl: './movie-reservation.component.html',
  styleUrls: ['./movie-reservation.component.scss'],
})
export class MovieReservationComponent  implements OnInit {
  isExpandedSeat=false;
  seats: { row: number; columns: { id: number; state: string; position:number  }[]; }[]=[];
  selectedSeats: {row: number, column: number}[]=[]
  isLoading=false;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.seats= TestData.seats;
  }

  back(){
    this.location.back();
  }

  expandSeat(value: boolean){
    this.isExpandedSeat=value;
    const seats:any=document.getElementById('global-container');
    const scrollWidth=seats?.scrollWidth / (2);
    /*
    setTimeout(() => {
      if (seats) {
        seats.scrollTo({
            left: scrollWidth-100,
            behavior: "smooth"
        });
      }
    }, 200);*/
  }

  reserveSeat(rowIndex: number, columnIndex: number){ 
    const seat ={
      row: this.seats[rowIndex].row,
      column: this.seats[rowIndex].columns[columnIndex].position
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

  payTicket(){
    this.isLoading=true;
    setTimeout(() => {
      this.isLoading=false;
      this.router.navigate(['/home']);
    }, 2000);
  }
}
