import { Component, Input, OnInit } from '@angular/core';
import { Movie, movies } from '../movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() movies!: Movie[];
  movie!: Movie;
  @Input() query?: string;

  constructor(private _route: Router) {}

  ngOnInit(): void {}

  setMovie(movie: Movie) {
    this.movie = movie;
  }
  getMovie() {
    return this.movie!;
  }
  toggleImage(m: Movie) {
    m.show = !m.show;
  }

  navigateTo(id: any) {
    this._route.navigate([`/movies/${id}`]);
  }
}
