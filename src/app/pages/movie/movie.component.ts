import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieVideo, MovieImages } from '../../models/movie';
import { Movie }  from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie : Movie | null = null;
  imagesSizes = IMAGES_SIZES;
  movieImages: MovieImages | null = null;
  movieVideos : MovieVideo[] = [];

  constructor(private route : ActivatedRoute, private moviesService : MoviesService) { }

  ngOnInit(): void {
  
  // read the params from the url
  this.route.params.subscribe(({id}) => {
    this.getMovie(id);
    this.getMovieVideos(id);
    this.getMovieImages(id);
  }); 
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
}
