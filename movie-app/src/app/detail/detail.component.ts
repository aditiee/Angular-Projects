import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: any;
  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe((r) => (this.id = r.id));
    console.log(this.id);
  }

  ngOnInit(): void {}
}
