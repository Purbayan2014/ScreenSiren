// Movie model for each of the movie class

export interface Movie {
  adult: false;
  revenue: number;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime : number;
  genres : Genre[];
  status : string;
}


export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieVideoDto {
    id : number;
    results: MovieVideo[];
}

export interface MovieVideo {
  site : string;
  key :  string;
  title: string;
}


export interface MovieImages {
  backdrops : {
    file_path : string;
  }[]
}