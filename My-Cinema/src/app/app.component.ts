import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My-Cinema';

  movies = [{ movieId: "M2221", movieName: "Avengers", movieCategory: "Action", movieRelease: "2021", ratings: "***", cover: '' },
  { movieId: "M54545", movieName: "Captain America", movieCategory: "Thriller", movieRelease: "2011", ratings: "****", cover: '' },
  { movieId: "Me3224", movieName: "Civil War", movieRelease: "2001", movieCategory: "Action", ratings: "****", cover: '' }
    , { movieId: "M76767", movieName: "Fast and Furious", movieCategory: "Thriller", movieRelease: "2006", ratings: "*****", cover: '' },
  { movieId: "M8989", movieName: "Rock On!", movieRelease: "2021", movieCategory: "Romantic", ratings: "***", cover: '' },
  { movieId: "M3ee3", movieName: "Zindagi na milenge dobara", movieCategory: "Thriller", movieRelease: "2021", ratings: "****", cover: '' }
    , { movieId: "M2441", movieName: "Karwaan", movieRelease: "2021", movieCategory: "Thriller", ratings: "****", cover: '' }];


}

