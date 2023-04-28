import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit {

    movies : Movie[] = [];
    genreId: string | null = "";

    constructor(private moviesService : MoviesService, private route:ActivatedRoute ) { }

    ngOnInit() : void {
      // take the first request from /movies/genreId
       this.route.params.pipe(take(1)).subscribe(({genreId})=>{
          if(genreId) {
              this.genreId = genreId;
              this.getMoviesByGenre(genreId, 1);
          } else {
            this.getPagedMovies(1);
          }
       });

    }

    // fetch the movies by genres
    getMoviesByGenre(genreId: string, page: number) {
      this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
        this.movies = movies;
      });
    }

    getPagedMovies(page: number) {
      // every time a new page number is provided we generate a new movies item 
      // to the array 
      this.moviesService.searchMovies(page).subscribe( (movies) => {
        this.movies = movies;
      });
    }

    onPageChange(event : any ){
    
      const pageNumber = event.page + 1;

      if (this.genreId) {
        this.getMoviesByGenre(this.genreId, pageNumber);
      } else {
        this.getPagedMovies(pageNumber);
      }
  
    }
}
