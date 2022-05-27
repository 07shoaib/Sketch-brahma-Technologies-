import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies;
    constructor(http: HttpClient){
    const path ='https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=Qf3aGKuDvG8k5MnpsYmmH1Pe3PW7Aiqh';
    this.movies = http.get<any>(path)
    .pipe(
        map(data => data.results)
    )
  }

  ngOnInit() {
  }

}