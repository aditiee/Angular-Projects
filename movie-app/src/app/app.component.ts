import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Movie, movies } from './movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  query?: string;
  movies: Movie[] = movies;
  searchResults: Movie[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log('inside oninit');
  }

  ngOnChanges(changes: any) {
    console.log('onchanges' + changes);
  }

  searchQuery(value: string) {
    this.query = value;
    this.searchResults = this.movies.filter((movie) => {
      var regex = new RegExp(`^${this.query}`, 'gi');
      return movie.name.match(regex);
    });

    if (this.query.length !== 0) {
      this.movies = this.searchResults;
    } else {
      this.movies = movies;
    }
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
