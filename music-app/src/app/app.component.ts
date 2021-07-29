import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AudioService } from './audio.service';
import { music, Music } from './music';
import { StreamState } from './stream-state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'music-app';
  music: Music[] = music;
  isPlaying: boolean = false;
  song!: Music;
  audio?: any;
  state!: StreamState;
  currentFile: any = {};
  favourites: Music[] = [];

  constructor(private audioService: AudioService) {
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  ngOnInit(): void {}

  play() {
    this.audioService.play();
  }

  pause() {
    this.audioService.pause();
  }

  stop() {
    this.audioService.stop();
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe((events) => {});
  }

  openFile(file: any, index: any) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.file);
  }

  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.music.length - 1;
  }

  next() {
    const index = this.currentFile.index + 1;
    const file: any = this.music[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file: any = this.music[index];
    this.openFile(file, index);
  }

  toggleFavourites(song: Music) {
    song.isFavourite = !song.isFavourite;
    if (song.isFavourite) this.favourites.push(song);
    else this.favourites = this.favourites.filter((f) => f.id !== song.id);
  }
}
