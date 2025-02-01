import { Component, Input } from '@angular/core';
import { ScheduledMovies } from 'src/app/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent   {
  
  @Input() movie!: ScheduledMovies; // Initialize with a default value
  @Input() showType: boolean=true; // Initialize with a default value

}
