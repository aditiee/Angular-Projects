import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating!: number;
  ratings: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.ratings = Array(5).fill(1);
  }
}
