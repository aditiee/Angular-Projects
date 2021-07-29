import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  // Search =" ";
  message = "Welcome to My-Cinema Application";

  isDisplay=true;

  showImage(movie :any )
  {
    
    movie.imageFlag = !movie.imageFlag;
      // this.isDisplay=!this.isDisplay;
 
  }



  movies = [{ movieId: "M2221", movieName: "Avengers", movieCategory: "Action", movieRelease: "2021", ratings: "***", cover: 'assets/avengers.jfif',imageFlag:true },
  { movieId: "M54545", movieName: "Captain America", movieCategory: "Thriller", movieRelease: "2011", ratings: "****", cover: 'assets/captain.jfif',imageFlag:true },
  { movieId: "Me3224", movieName: "Civil War", movieRelease: "2001", movieCategory: "Action", ratings: "****", cover: 'assets/civil.jfif' ,imageFlag:true}
    , { movieId: "M76767", movieName: "Fast and Furious", movieCategory: "Thriller", movieRelease: "2006", ratings: "*****", cover: 'assets/fnf.jfif',imageFlag:true },
  { movieId: "M8989", movieName: "Rock On!", movieRelease: "2021", movieCategory: "Romantic", ratings: "***", cover: 'assets/rock.jfif',imageFlag:true },
  { movieId: "M3ee3", movieName: "Zindagi na milenge dobara", movieCategory: "Thriller", movieRelease: "2021", ratings: "****", cover: 'assets/znmd.jfif',imageFlag:true }
    , { movieId: "M2441", movieName: "Karwaan", movieRelease: "2021", movieCategory: "Thriller", ratings: "****", cover: 'assets/karwaan.jfif',imageFlag:true }];

    @Input('parentName') public Search :string=" ";
  constructor() { }

  ngOnInit(): void {
    
  }
  toggleImage()
  {
    alert("button clicked!");
  }

}
