import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];
  constructor(private moviesServices: MoviesService) {}

  ngOnInit(): void {
    // return the observable
    // .subscribe means to wait for the function to fetch the data
    // from the rest api
    this.moviesServices.getMovies().subscribe((response: any) => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }
}
