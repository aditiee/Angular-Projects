import { Injectable } from '@angular/core';

import { movies, Movie } from '../movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getAllMovies() {
    return movies;
  }
  getMovieById(movieId: number) {
    return movies.find((movie) => movie.id === movieId);
  }
}
