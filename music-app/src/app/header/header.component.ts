import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { music, Music } from '../music';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  music: Music[] = music;
  @Input() favourites?: Music[];
  styles = {
    display: 'flex',
    'align-items': 'center',
  };
  
  musicForm = this.fb.group({
    musicName: '',
    genre: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.musicForm.value);
    this.musicForm.reset();
  }
}
