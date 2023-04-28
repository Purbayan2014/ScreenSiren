import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie }  from '../../models/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie : Movie | null = null;

  constructor(private route : ActivatedRoute, private moviesService : MoviesService) { }

  ngOnInit(): void {
  
  // read the params from the url
  this.route.params.subscribe(({id}) => {
    this.getMovie(id);
  }); 
  }

  getMovie(id : string ) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
        this.movie = movieData;
        console.log(movieData);
    });
  }
}
