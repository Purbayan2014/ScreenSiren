import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviornment';
import { MovieDto, MovieImages } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TvDto } from '../models/tv';
import { Movie }  from '../models/movie';
import { MovieVideoDto } from '../models/movie';
import { MovieCredits } from '../models/movie';
import {  GenresDto  } from '../models/genre';


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

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${environment.moviedbapi}`);
  }

  searchSimilarMovies(id: string, page: number) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?page=${page}&api_key=${environment.moviedbapi}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${environment.moviedbapi}`);
  }

  getMovieVideos(id : string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${environment.moviedbapi}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMoviesGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${environment.moviedbapi}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${environment.moviedbapi}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
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

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${environment.moviedbapi}`);
  }
}
