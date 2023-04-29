import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GenresDto } from '../models/genre';
import { Tv, TvDto, TvShowCredits, TvShowImages, TvShowVideoDto } from '../models/tvshow';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class TvshowsService {
	baseUrl: string = 'https://api.themoviedb.org/3';


	constructor(private http: HttpClient) {}

	getTvShows(type: string = 'latest', count: number = 12) {
		return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${environment.moviedbapi}`).pipe(
			switchMap((res) => {
				return of(res.results.slice(0, count));
			})
		);
	}

	getTvShowDetails(id: string) {
		return this.http.get<Tv>(`${this.baseUrl}/tv/${id}?api_key=${environment.moviedbapi}`);
	}

	getTvShowVideos(id: string) {
		return this.http.get<TvShowVideoDto>(`${this.baseUrl}/tv/${id}/videos?api_key=${environment.moviedbapi}`).pipe(
			switchMap((res) => {
				return of(res.results);
			})
		);
	}

	getTvShowImages(id: string) {
		return this.http.get<TvShowImages>(`${this.baseUrl}/tv/${id}/images?api_key=${environment.moviedbapi}`);
	}

	getTvShowCredits(id: string) {
		return this.http.get<TvShowCredits>(`${this.baseUrl}/tv/${id}/credits?api_key=${environment.moviedbapi}`);
	}

	getTvShowSimilar(id: string) {
		return this.http.get<TvDto>(`${this.baseUrl}/tv/${id}/similar?api_key=${environment.moviedbapi}`).pipe(
			switchMap((res) => {
				return of(res.results.slice(0, 5));
			})
		);
	}

	searchTvShows(page: number, searchValue?: string) {
		const uri = searchValue ? '/search/tv' : '/tv/popular';
		return this.http.get<TvDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${environment.moviedbapi}`).pipe(
			switchMap((res) => {
				return of(res.results);
			})
		);
	}

	getTvShowsGenres() {
		return this.http.get<GenresDto>(`${this.baseUrl}/genre/tv/list?api_key=${environment.moviedbapi}`).pipe(
			switchMap((res) => {
				return of(res.genres);
			})
		);
	}

	getTvShowsByGenre(genreId: string, pageNumber: number) {
		return this.http
			.get<TvDto>(`${this.baseUrl}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${environment.moviedbapi}`)
			.pipe(
				switchMap((res) => {
					return of(res.results);
				})
			);
	}
}
