import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export interface Tile {
 
  cols: number;
  rows: number;
 
} 


interface audioList{
  url : string,
  title:string,
  cover:string
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  searchTerm: string="";
  audioList: audioList[]=[];
  term: string="";
  

  // audioList = [
  //   {
  //     url: "../assets/song1.mp3",
  //     title: "Sample 1",
  //     cover: "../assets/song1.jfif"
  //   },
  //   {
  //     url:  "../assets/Cheap Thrills.mp3",
  //     title: "Sample 2",
  //     cover: "../assets/Cheap Thrills.jfif"
  //   },
   
  //   {
  //     url: "../assets/Girls-like-you.mp3",
  //     title: "Sample 1",
  //     cover: "../assets/girls.jfif"
  //   }
  // ];
  // Material Style Basic Audio Player Title and Audio URL
  tiles: Tile[] = [
    { cols: 3, rows: 1},
    
    
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<audioList[]>('./assets/data/audioList.json')
    .subscribe((data: audioList[]) => {
      this.audioList = data;
    });
  
    }
}
