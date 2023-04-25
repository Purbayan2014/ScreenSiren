import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviornment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // service for getting the popular movies from the rest api
  constructor(private http: HttpClient) {}

  getMovies() {
    // function which returns the movies using a get request
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.moviedbapi}`);
  }
}
