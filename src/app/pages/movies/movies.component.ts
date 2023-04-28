import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit {

    movies : Movie[] = [];

    constructor(private moviesService : MoviesService ) { }

    ngOnInit() : void {
       this.getPagedMovies(1); 
    }

    getPagedMovies(page: number) {
      // every time a new page number is provided we generate a new movies item 
      // to the array 
      this.moviesService.searchMovies(page).subscribe( (movies) => {
        this.movies = movies;
      });
    }

    onPageChange(event : any ){
      this.getPagedMovies(event.page + 1);
    }
}
