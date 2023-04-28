import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviornment';
import { MovieDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TvDto } from '../models/tv';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    // service for getting the popular movies from the rest api
    // function which returns the movies using a get request
  baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${environment.moviedbapi}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }


  searchMovies(page: number) {
    return this.http.get<TvDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${environment.moviedbapi}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }


  getTvs(type: string = 'latest', count: number = 12) {
    return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${environment.moviedbapi}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }
}
