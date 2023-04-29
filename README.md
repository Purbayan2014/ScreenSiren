# ScreenSiren

ScreenSiren is a web application built using Angular and PrimeNG components, which uses the TMDB API to display information about trending and popular TV shows and movies. Users can view details about each TV show and movie, including videos and search for them by name or genre.

## Features

- View trending and popular TV shows and movies
- View details about each TV show and movie, including videos
- Search for TV shows and movies by name or genre

## Tech Stack Used

ScreenSiren uses the following technologies:

- Angular
- TypeScript
- PrimeNG UI 
- PrimeFlex CSS
- TMDB Movies API

## API Keys Needed for running Locally 

If you wish to run the animation locally or debug it first request for a api at [TMDB Movies API](https://www.themoviedb.org/documentation/api) and then create three files

  - .env.staging
  - .env.production
  - .env.developement
  - .env
  
and insert your api key there like this 

`MOVIE_DB_API_KEY="<your-api-key>"`


## How to Run Locally

1. Clone the repository
  
   `git clone https://github.com/Purbayan2014/ScreenSiren.git`

2. Install dependencies
  
   `npm install --legacy-peer-deps -save`

3. Run the application

    `ng serve`

4. Open your browser and go to http://localhost:4200/

## Credits

- Angular: https://angular.io/
- PrimeNG: https://www.primefaces.org/primeng/
- TMDB Movies API: https://www.themoviedb.org/documentation/api
- PrimFlex : https://www.primefaces.org/primeflex/
