import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;
  constructor(http: HttpClient){
  const path ='https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=Qf3aGKuDvG8k5MnpsYmmH1Pe3PW7Aiqh';
  this.books = http.get<any>(path)
  .pipe(
      map(data => data.results)
  )
}

ngOnInit() {
}

}

