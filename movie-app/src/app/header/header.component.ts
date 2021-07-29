import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onQuery = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  searchQuery(value: string) {
    console.log(value);
    this.onQuery.emit(value);
  }
}
