import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieVideo, MovieImages, MovieCredits } from '../../models/movie';
import { Movie }  from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie : Movie | null = null;
  imagesSizes = IMAGES_SIZES;
  movieImages: MovieImages | null = null;
  movieVideos : MovieVideo[] = [];
  movieCredits: MovieCredits | null = null;
  moviesSimilar: Movie[] = [];

  constructor(private route : ActivatedRoute, private moviesService : MoviesService) { }

  ngOnInit(): void {
  
  // read the params from the url
  // gettting the first value then destroying it
  this.route.params.pipe(first()).subscribe(({id}) => {
    this.getMovie(id);
    this.getMovieVideos(id);
    this.getMovieImages(id);
    this.getMovieCredits(id);
    this.getPagedMoviesSimilar(id, 1);
  }); 
  }

  ngOnDestroy(): void {
    // fixed mem leaks
     console.log("components destroyed");
  }

  getMovie(id : string ) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
        this.movie = movieData;
        console.log(movieData);
    });
  }

  getMovieVideos(id : string ){
    this.moviesService.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
      console.log(movieVideosData);
    })
  }

  getMovieImages(id: string){
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
      console.log(movieImagesData);
    })
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
      console.log(movieCreditsData);
    })
  }

  getPagedMoviesSimilar(id: string, page: number) {
    this.moviesService.searchSimilarMovies(id, page).subscribe((moviesSimilarData) => {
      this.moviesSimilar = moviesSimilarData;
    });
  }

  paginateSimilar(id: string, event: any) {
    this.getPagedMoviesSimilar(id, event.page + 1);
  }
}
